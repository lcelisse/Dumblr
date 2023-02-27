from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime
from .likes import likes


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post_type = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False, )
    title = db.Column(db.String(475))
    body = db.Column(db.String(475))
    url = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow())

    user = db.relationship("User", back_populates="posts")
    comments = db.relationship(
        "Comment", back_populates="post", cascade="all,delete")
    post_likes = db.relationship(
        "User", secondary=likes, back_populates="user_likes")

    def to_dict(self):
        return {
            "id": self.id,
            "post_type": self.post_type,
            "user_id": self.user_id,
            "body": self.body,
            "url": self.url,
            "title": self.title,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "comment_count": len(self.comments),
            "likes_count": len(self.post_likes),
            "comment_count": len(self.comments),
            "post_likes": {user.id: user.to_dict() for user in self.post_likes}
            # "comments": [com.to_dict() for com in self.comments]

        }

    def to_dict_individual_post(self):
        return {
            "id": self.id,
            "post_type": self.post_type,
            "user_id": self.user_id,
            "body": self.body,
            "url": self.url,
            "title": self.title,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "comment_count": len(self.comments),
            "comments": [com.to_dict() for com in self.comments],
            "likes_count": len(self.post_likes),
            "post_likes": {user.id: user.to_dict() for user in self.post_likes}
        }

    def all_post_likes(self):
        return {
            "post_likes": {user.id: user.to_dict() for user in self.post_likes}
        }
