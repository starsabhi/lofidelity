from flask_wtf import FlaskForm
from wtforms.fields import FloatField, IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Album

class AlbumForm(FlaskForm):
  artistId = IntegerField('artistId', validators=[DataRequired()])
  title = StringField('name', validators=[DataRequired()])
  release_year = IntegerField('release_year', validators=[DataRequired()])
  about = TextAreaField('about')
  imageUrl = StringField('imageUrl')
  price = FloatField('price')
