from .db import db

class Album(db.Model):
  __tablename__= 'albums'

  id = db.Column(db.Integer, primary_key=True)
  artistId = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable=False)
  title = db.Column(db.String(255), nullable=False)
  release = db.Column(db.Date, nullable=False)
  about = db.Column(db.Text)
  imageUrl = db.Column(db.String(255))
  price = db.Column(db.Float)

  artist = db.relationship('Artist', back_populates='albums')
  songs = db.relationship('Song', back_populates='album')
