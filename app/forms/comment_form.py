from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CommentForm(FlaskForm):
    user_id = IntegerField('user.id')
    post_id = IntegerField('post.id')
    comment = StringField('comment', validators=[DataRequired()])
