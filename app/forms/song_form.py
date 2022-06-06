from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class SongForm(FlaskForm):
    albumId = IntegerField('albumId', validators=[DataRequired()])
    title = StringField('title', validators=[
        DataRequired(),
        Length(min=0, max=255,
               message='Title must be less than 255 characters.'), ])
    # trackNumber = IntegerField('trackNumber', validators=[DataRequired()])
    # audioUrl = StringField('audioUrl', validators=[DataRequired()])
