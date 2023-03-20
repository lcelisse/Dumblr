from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .likes import likes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)

    title = db.Column(db.String(475))
    bio = db.Column(db.String(475))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image_url = db.Column(db.String(475))
    header_image_url = db.Column(db.String(475))

    posts = db.relationship(
        "Post", back_populates="user", cascade="all, delete")
    comments = db.relationship(
        "Comment", back_populates="user", cascade="all,delete")
    user_likes = db.relationship(
        "Post", secondary=likes, back_populates="post_likes", cascade="all,delete")

    followers = db.relationship("Follow", back_populates="follower",
                                primaryjoin=lambda: User.id == Follow.follower_id, cascade="all, delete-orphan")
    followed = db.relationship("Follow", back_populates="following",
                               primaryjoin=lambda: User.id == Follow.following_id, cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,

            'bio': self.bio,
            'title': self.title,
            'header_image_url': self.header_image_url,
            'profile_image_url': self.profile_image_url,
            "user_likes": len(self.user_likes),

            "Following": [following.to_dict() for following in self.followers]

        }

    def following_to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            # 'Posts': [post.to_dict for post in self.posts]
        }


class Follow(db.Model):
    __tablename__ = "follows"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    following_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False, primary_key=True)
    follower_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False, primary_key=True)

    following = db.relationship(
        "User", back_populates="followed", foreign_keys=[following_id])
    follower = db.relationship(
        "User", back_populates="followers", foreign_keys=[follower_id])

    def to_dict(self):
        return self.following.following_to_dict()
