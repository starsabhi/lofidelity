from flask_wtf import FlaskForm
# from flask_wtf.file import FileField, FileRequired
from wtforms.fields import FloatField, IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired, NumberRange, Length
# from app.models import Album

from datetime import datetime


class AlbumForm(FlaskForm):
    artistId = IntegerField('artistId', validators=[DataRequired()])
    title = StringField('name', validators=[
        DataRequired(),
        Length(min=0, max=255,
               message='Title must be less than 255 characters.'), ])
    releaseYear = IntegerField('releaseYear', validators=[
        DataRequired(),
        NumberRange(min=1900, max=datetime.now().year+1)])
    about = TextAreaField('about')
    # price = FloatField('price')
