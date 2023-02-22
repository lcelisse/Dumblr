from flask import Blueprint
from flask import Blueprint
from app.models import Post, User, db
from flask_login import login_required, current_user

# import app.s3_helpers as s3

post_routes = Blueprint('posts', __name__)

# Get all Post


@post_routes.route('')
def posts():
    posts = Post.query.all()
    return {post.id: post.to_dict_individual_post() for post in posts}

# Get a single post


@post_routes.route("/<int:id>")
def post(id):
    post = Post.query.get(id)

    if not post:
        return {"Errors": "Post Not Found"}, 404

    return post.to_dict_individual_post()

# Delete the post


@post_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    if not post:
        return {"Error": "Post Not Found"}

    db.session.delete(post)
    db.session.commit()
    return {"Message": "Delete Successful"}

# Create a Post


# @bp.route('', methods=["POST"])
# @login_required
# def create_post():
#     new_post = Post(


#     )
