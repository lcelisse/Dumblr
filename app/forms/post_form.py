from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    title = StringField('Title')
    post_type = StringField('Post Type')
    body = StringField('body')
    url = StringField('url')
