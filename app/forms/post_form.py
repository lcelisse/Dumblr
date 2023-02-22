from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


def type(form, field):
    types = ['text', 'photo', 'link', 'quote']
    type = field.data
    if type not in types:
        raise ValidationError(
            "Wrong type must be text , a quote, an image, or a link")


class PostForm(FlaskForm):
    title = StringField('Title')
    post_type = StringField('Post Type', validators=[DataRequired(), type])
    body = StringField('body', validators=[DataRequired()])
    url = StringField('url')
