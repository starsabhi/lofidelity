from .db import db


class Song(db.Model):
    __tablename__ = 'songs'

    # sqlalchemy will automatically set pk id
    id = db.Column(db.Integer, primary_key=True)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'))
    title = db.Column(db.String(255), nullable=False)
    trackNumber = db.Column(db.Integer, nullable=False)
    audioUrl = db.Column(db.String(1000), nullable=False)

    # attribute_name = db.relationship("OtherClassName", back_populates="other_relationship_attribute_name")
    album = db.relationship("Album", back_populates="songs")
