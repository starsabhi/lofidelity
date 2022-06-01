from flask_wtf import FlaskForm
from wtforms.fields import (
    StringField, IntegerField
)
from wtforms.validators import DataRequired


class SongForm(FlaskForm):
    albumId = IntegerField('albumId', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    trackNumber = IntegerField('trackNumber', validators=[DataRequired()])
    audioUrl = StringField('audioUrl', validators=[DataRequired()])
