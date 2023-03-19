from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Follow, db
from app.forms import FollowForm, UserForm
import app.s3_helpers as s3

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/posts')
def read_user_post(id):
    user = User.query.get(id)

    if not user:
        return {"Error": "User not found"}

    posts = user.posts
    return {post.id: post.to_dict_individual_post() for post in posts}


@user_routes.route('/<int:id>/following', methods=["POST"])
@login_required
def follow(id):
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_follow = Follow(
            following_id=id,
            follower_id=current_user.id
        )
        db.session.add(new_follow)
        db.session.commit()
        return jsonify(new_follow.to_dict())
    else:
        return jsonify(form)


@user_routes.route('/<int:id>/following', methods=["DELETE"])
@login_required
def unfollow(id):
    follow = Follow.query.filter(
        Follow.following_id == id, Follow.follower_id == current_user.id).first()
    db.session.delete(follow)
    db.session.commit()
    return jsonify("User Unfollowed")


@user_routes.route("/<int:id>/likes")
def user_likes(id):
    user = User.query.get(id)

    if not user:
        return {"errors": "User not found"}

    posts = user.user_likes
    return {post.id: post.to_dict_individual_post() for post in posts}


@user_routes.route("/<int:id>/header-img", methods=['POST'])
@login_required
def set_header(id):
    user = User.query.get(id)

    if not user:
        return {"Error": "User not found"}, 404

    header_image_url = user.header_image_url

    if "header_picture" in request.files:
        header_picture = request.files["header_picture"]

        if not s3.image_file(header_picture.filename):
            print("file type not permitted")
            return {"Error": "File type not permitted"}, 400

        if header_image_url:
            image = user.header_image_url.rsplit('/')[-1]
            s3.remove_image_file_from_s3

        header_picture.filename = s3.get_unique_filename(
            header_picture.filename)

        upload_img = s3.upload_image_file_to_s3(header_picture)

        if "url" not in upload_img:
            print("Error upload")

            return {"Error": upload_img}, 400

        header_image_url = upload_img["url"]

    user.header_image_url = header_image_url

    db.session.add(user)
    db.session.commit()

    return user.to_dict()


@user_routes.route("/<int:id>", methods=['PUT'])
@login_required
def edit_user(id):
    user = User.query.get(id)

    if not user:
        return {"Error": "User not found"}, 404

    profile_image_url = user.profile_image_url

    if "profile_picture" in request.files:
        profile_picture = request.files["profile_picture"]

        if not s3.image_file(profile_picture.filename):
            print("Error")
            return {"Error": "File type not permitted"}, 400

        if profile_image_url:
            image = user.profile_image_url.rsplit('/')[-1]
            s3.remove_image_file_from_s3(image)

        profile_picture.filename = s3.get_unique_filename(
            profile_picture.filename)

        upload_image = s3.upload_image_file_to_s3(profile_picture)

        if "url" not in upload_image:
            print("Error")

            return {"Error": upload_image}, 400

        profile_image_url = upload_image["url"]

    form_data = request.form.to_dict()

    user.display_name = form_data["display_name"]
    user.title = form_data["title"]
    user.bio = form_data["bio"]
    user.profile_image_url = form_data["profile_image_url"]

    db.session.add(user)
    db.session.commit()
    return user.to_dict()
