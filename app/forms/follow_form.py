from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class FollowForm(FlaskForm):
    followingId = IntegerField('followingId', validators=[DataRequired()])
    followerId = IntegerField('followerId', validators=[DataRequired()])
