from flask import Blueprint, request
from app.models import Post, User, db, likes
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
    global url
    global new_post
    if "image" in request.files:
        image = request.files["image"]

        if not s3.image_file(image.filename):
            return {"Error": "File Type Not Permitted"}

        image.filename = s3.get_unique_filename(image.filename)

        upload_image = s3.upload_image_file_to_s3(image)

        if "url" not in upload_image:
            return {"Error": upload_image}

        url = upload_image["url"]
        new_post = Post(
            user_id=current_user.id,
            title=request.form.get("title"),
            post_type=request.form.get("post_type"),
            body=request.form.get("body"),
            url=url
        )
    else:
        new_post = Post(
            user_id=current_user.id,
            title=request.form.get("title"),
            post_type=request.form.get("post_type"),
            body=request.form.get("body")
        )
    db.session.add(new_post)
    db.session.commit()
    return new_post.to_dict_individual_post()

# Edit Post


@post_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_post(id):
    print(request)

    post = Post.query.get(id)

    global url
    global new_post
    if "image" in request.files:
        image = request.files["image"]

        if not s3.image_file(image.filename):
            return {"Error": "File Type Not Permitted"}

        image.filename = s3.get_unique_filename(image.filename)

        upload_image = s3.upload_image_file_to_s3(image)

        if "url" not in upload_image:
            return {"Error": upload_image}

        url = upload_image['url']

        post.title = request.form.get("title")
        post.post_type = request.form.get("post_type")
        post.body = request.form.get("body")
        post.url = url
    else:
        post.title = request.form.get("title")
        post.post_type = request.form.get("post_type")
        post.body = request.form.get("body")

    db.session.commit()

    return post.to_dict_individual_post()


# Like a Post
@post_routes.route("/<int:postId>/likes", methods=["POST"])
@login_required
def like_post(postId):
    post = Post.query.get(postId)
    print(post.post_likes)
    post.post_likes.append(current_user)
    print(post.post_likes)
    db.session.add(post)
    db.session.commit()

    return post.to_dict_individual_post()

# Unlike a post


@post_routes.route("/<int:postId>/likes", methods=["DELETE"])
@login_required
def unlike_post(postId):
    post = Post.query.get(postId)
    print(post.post_likes)
    post.post_likes.remove(current_user)
    print(post.post_likes)
    db.session.add(post)
    db.session.commit()

    return {"message": "Successfully Deleted"}
