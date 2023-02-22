from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    comment = StringField('comment', validators=[DataRequired(), Length(
        min=0, max=255, message='Comments be between 1 and 475 characters')])
