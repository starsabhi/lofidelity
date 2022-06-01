from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

from sqlalchemy import or_


def user_exists(form, field):
    # Checking if user exists
    #     email = field.data
    #     user = User.query.filter(User.email == email).first()
    credential = field.data

    user = User.query.filter(or_(
        User.email == credential, User.username == credential)).first()

    if not user:
        raise ValidationError('Username or Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    # email = form.data['email']
    # user = User.query.filter(User.email == email).first()
    credential = form.data['credential']

    user = User.query.filter(or_(
        User.email == credential, User.username == credential)).first()

    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    # email = StringField('email', validators=[DataRequired(), user_exists])
    credential = StringField('credential', validators=[
                             DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
