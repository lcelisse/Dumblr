from flask import Blueprint
from flask import Blueprint, request, redirect, render_template
from app.models import Post, User, db
from flask_login import login_required, current_user
from app.forms import PostForm
# import app.s3_helpers as s3

bp = Blueprint('posts', __name__)

# Get all Post


@bp.route('')
def posts():
    posts = Post.query.all()
    return {post.id: post.to_dict_individual_post() for post in posts}

# Get a single post


@bp.route("/<int:id>")
def post(id):
    post = Post.query.get(id)

    if not post:
        return {"Errors": "Post Not Found"}, 404

    return post.to_dict_individual_post()

# Delete the post


@bp.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    if not post:
        return {"Error": "Post Not Found"}

    db.session.delete(post)
    db.session.commit()
    return {"Message": "Delete Successful"}
