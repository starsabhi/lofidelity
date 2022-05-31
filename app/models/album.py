from .db import db
from sqlalchemy.sql import func

class Album(db.Model):
  __tablename__= 'albums'

  id = db.Column(db.Integer, primary_key=True)
  artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
  title = db.Column(db.String(255), nullable=False)
  release = db.Column(db.Date, nullable=False)
  about = db.Column(db.Text)
  imageUrl = db.Column(db.String(1000))
  price = db.Column(db.Float)
  createdAt = db.Column(db.DateTime, nullable=False, server_default=func.now())
  updatedAt = db.Column(db.DateTime, nullable=False, server_default=func.now(), onupdate=func.now())

  artist = db.relationship('Artist', back_populates='albums')
  songs = db.relationship('Song', back_populates='album')
