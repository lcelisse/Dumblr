from flask import Blueprint, request
from app.models import Post, User, db
from flask_login import login_required, current_user
import app.s3_helpers as s3
from sqlalchemy.sql.expression import func
from random import random
post_routes = Blueprint('posts', __name__)

# Get all Post


@post_routes.route('')
def posts():
    posts = Post.query.order_by(Post.created_at).all()
    return {post.id: post.to_dict() for post in posts}

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


@post_routes.route('', methods=["POST"])
@login_required
def create_post():

    if "image" not in request.files:
        return {"Error": "Image Required"}

    image = request.files["image"]

    if not s3.image_file(image.filename):
        return {"Error": "File Type Not Permitted"}

    image.filename = s3.get_unique_filename(image.filename)

    upload_image = s3.upload_image_file_to_s3(image)

    if "url" not in upload_image:
        return {"Error": upload_image}

    url = upload_image["url"]
    form_data = request.form.to_dict()

    new_post = Post(
        user_id=current_user.id,
        title=form_data["title"],
        post_type=form_data["post type"],
        body=form_data["body"],
        url=url
    )

    db.session.add(new_post)
    db.session.commit()
    return new_post.to_dict_individual_post

# Edit Post


@post_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_post():
    post = Post.query.get(id)

    if not post:
        return {"Error": "Post Not Found"}

    if "image" in request.files:
        imageKey = post.url.rsplit("/")[-1]
        s3.remove_image_file_from_s3(imageKey)

    image = request.files["image"]

    if not s3.image_file(image.filename):
        return {"Error": "File Type Not Permitted"}

    image.filename = s3.get_unique_filename(image.filename)

    upload_image = s3.upload_image_file_to_s3(image)
    if "url" not in upload_image:
        return {"Error": upload_image}

    url = upload_image['url']

    form_data = request.form.to_dict()

    post.title = form_data["title"],
    post.post_type = form_data["post type"],
    post.body = form_data["body"],
    post.url = url

    db.session.add(post)
    db.session.commit()

    return post.to_dict_individual_post()
