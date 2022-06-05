from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import Length, DataRequired, Email, ValidationError, Regexp
# https://pypi.org/project/wtforms-validators/#AlphaNumeric
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


# def password_match(form, field):
#     # Checking if passwords match
#     password = form.password.data
#     confirmPassword = field.data
#     if password != confirmPassword:
#         raise ValidationError('Passwords must match.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[
            DataRequired(),
            Length(min=5, max=25,
                   message='Username must be between 5 & 25 characters.'),
            Regexp('^\w+$',
                   message='Username must contain only letters, numbers or underscore.'),
            username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    # confirmPassword = StringField(
    #     'confirmPassword', validators=[DataRequired(), password_match])
