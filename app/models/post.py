from .bp import bp, environment, SCHEMA, add_prefix_for_prod
import datetime


class Post(bp.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = bp.Column(bp.Integer, primary_key=True)
    post_type = bp.Column(bp.String)
    user_id = bp.Column(bp.Integer, bp.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False, )
    title = bp.Column(bp.String(255))
    body = bp.Column(bp.String(255))
    url = bp.Column(bp.String)
    created_at = bp.Column(bp.DateTime, default=datetime.datetime.utcnow())

    user = bp.relationship("User", back_populates="posts")
    comment = bp.relationship(
        "Comment", back_populates="posts", cascade="all,delete")

    def to_dict(self):
        return {
            "id": self.id,
            "post_type": self.post_type,
            "user_id": self.user_id,
            "body": self.body,
            "url": self.url,
            "title": self.title,
            "created_at": self.created_at,
            # "user": self.user.to_dict(),
            "comment_count": len(self.self.comment)

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
            "comment_count": len(self.self.comment),
            "comment": [com.to_dict() for com in self.comment]
        }
