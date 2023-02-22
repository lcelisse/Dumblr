from .bp import bp, environment, SCHEMA, add_prefix_for_prod
import datetime


class Comment(bp.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = bp.Column(bp.Integer, primary_key=True)
    post_id = bp.Column(bp.Integer, bp.ForeignKey(
        add_prefix_for_prod("posts.id")), nullable=False)
    user_id = bp.Column(bp.Integer, bp.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    comment = bp.Column(bp.String(475), nullable=False)
    created_at = bp.Column(bp.DateTime, default=datetime.datetime.utcnow())

    user = bp.relationship("User", back_populates="comments")
    post = bp.relationship("Post", back_populates="comments")

    def to_dict(self):
        return {
            "id": self.id,
            "post_id": self.post_id,
            "user_id": self.user_id,
            "comment": self.comment,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "post": self.post.to_dict()
        }
