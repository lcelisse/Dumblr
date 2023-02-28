from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Follow, db
from app.forms import FollowForm

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


@user_routes.route('/<int:id>/DELETEs')
def read_user_post(id):
    user = User.query.get(id)

    if not user:
        return {"Error": "User not found"}

    posts = user.posts
    return {post.id: post.to_dict_individual_post() for post in posts}


@user_routes.route('/<int:id>/follow', methods=["POST"])
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
        return jsonify("Error when following User")


@user_routes.route('/<int:id>/follow', methods=["DELETE"])
@login_required
def unfollow(id):
    follow = Follow.query.filter(
        Follow.following_id == id, Follow.follower_id == current_user.id).first()
    db.session.delete(follow)
    db.session.commit()
    return jsonify("User Unfollowed")
