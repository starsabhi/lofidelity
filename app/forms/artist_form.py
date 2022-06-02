from flask_wtf import FlaskForm
from wtforms.fields import (
    PasswordField, SelectField, SelectMultipleField, StringField, IntegerField
)
from wtforms.validators import DataRequired, ValidationError
from app.models import Artist


def artistUrl_exists(form, field):
    # Check if artistUrl is already in use by another user other than current user
    artistUrl = field.data
    currentUserId = form.userId.data
    artist = Artist.query.filter(Artist.artistUrl == artistUrl).first()

    if artist and artist.userId != currentUserId:
        raise ValidationError('Url is already in use.')


#autopep8: off
class ArtistForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    genreId = IntegerField('genreId', validators=[DataRequired()])
    location = StringField('location', validators=[DataRequired()])
    artistUrl = StringField('artistUrl', validators=[DataRequired(),artistUrl_exists])
    description = StringField('description', validators=[DataRequired()])
    # bgImageUrl = StringField('bgImageUrl', validators=[DataRequired()])
    # coverImageUrl = StringField('coverImageUrl', validators=[DataRequired()])
    # profileImageUrl = StringField('profileImageUrl', validators=[DataRequired()])
