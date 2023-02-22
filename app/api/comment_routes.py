from flask import Blueprint, request
from app.models import Post, Comment, db
from flask_login import login_required, current_user
from .post_routes import post_routes
from app.forms import CommentForm

bp = Blueprint("comments", __name__)

# Get all the post comments


@post_routes.route("/<int:id>/comments")
def post_comments(id):
    comments = Comment.query.filter(
        Comment.post_id == id).order_by(Comment.created_at).all()

    if comments:
        return [comment.to_dict() for comment in comments]
    else:
        return {"Error": "No Comments Found"}


# Create a comment on the post
@post_routes.route("/<int:id>/comments", methods=["POST"])
@login_required
def create_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            comment=form.data["body"],
            user_id=current_user.id,
            post_id=id,
        )
        db.session.add(comment)
        db.session.commit()

        return comment.to_dict()
    return {"Error": "Could not create"}

# Delete the comment


@bp.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    if not comment:
        return {"Error": "Comment Not Found"}

    db.session.delete(comment)
    db.session.commit()
    return {"message": "Delete successful"}
