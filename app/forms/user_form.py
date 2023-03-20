from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length


class UserForm(FlaskForm):

    email = StringField('Email')
    bio = StringField('Bio', validators=[Length(
        min=0, max=255, message="Must not exceed 475 charcters")])
    title = StringField('Title')
    header_image_url = StringField('Header Image')
    profile_image_url = StringField('Profile Name')
