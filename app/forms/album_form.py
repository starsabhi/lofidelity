from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from wtforms.fields import FloatField, IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Album


class AlbumForm(FlaskForm):
    artistId = IntegerField('artistId', validators=[DataRequired()])
    title = StringField('name', validators=[DataRequired()])
    releaseYear = IntegerField('releaseYear', validators=[DataRequired()])
    about = TextAreaField('about')
    price = FloatField('price')
