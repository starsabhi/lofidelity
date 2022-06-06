from flask_wtf import FlaskForm
from wtforms.fields import (
    PasswordField, SelectField, SelectMultipleField, StringField, IntegerField
)
from wtforms.validators import DataRequired, ValidationError, Regexp, Length
from app.models import Artist


def artistName_exists(form, field):
    # Check if artistUrl is already in use by another user other than current user
    name = field.data
    currentUserId = form.userId.data
    artist = Artist.query.filter(Artist.name == name).first()

    if artist and artist.userId != currentUserId:
        raise ValidationError('Artist name is already in use.')


def artistUrl_exists(form, field):
    # Check if artistUrl is already in use by another user other than current user
    artistUrl = field.data
    currentUserId = form.userId.data
    artist = Artist.query.filter(Artist.artistUrl == artistUrl).first()

    if artist and artist.userId != currentUserId:
        raise ValidationError('Url is already in use.')


#autopep8: off
class ArtistForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(message="Please enter an artist name."),
        Length(min=0, max=255,
               message='Name must be less than 255 characters.'),
        artistName_exists])
    userId = IntegerField('userId', validators=[DataRequired()])
    genreId = IntegerField('genreId', validators=[DataRequired(message='Please select a genre.')])
    location = StringField('location', validators=[DataRequired(message="Please enter a location."),
        Length(min=0, max=255,
               message='Location must be less than 255 characters.'), ])
    artistUrl = StringField('artistUrl', validators=[DataRequired(message="Please enter an artistUrl."),
        Length(min=0, max=255,
            message='Name must be less than 255 characters.'),
        Regexp('^[\w\-]+$',
            message='Artist Profile Url must contain only letters, numbers or underscore.'),
        artistUrl_exists])
    description = StringField('description', validators=[DataRequired(message="Please enter a description."),
        Length(min=0, max=400,
               message='Description must be less than 400 characters.')])
    # bgImageUrl = StringField('bgImageUrl', validators=[DataRequired()])
    # coverImageUrl = StringField('coverImageUrl', validators=[DataRequired()])
    # profileImageUrl = StringField('profileImageUrl', validators=[DataRequired()])
