from .db import db
from sqlalchemy.sql import func

# autopep8: off
class Artist(db.Model):
    __tablename__= 'artists'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    genreId = db.Column(db.Integer, db.ForeignKey('genres.id'), nullable=False)
    name = db.Column(db.String(150), nullable=False, unique=True)
    location = db.Column(db.String(255), nullable=False)
    artistUrl = db.Column(db.String(255), nullable=False, unique=True)
    description = db.Column(db.Text)
    bgImageUrl = db.Column(db.String(1000))
    coverImageUrl = db.Column(db.String(1000))
    profileImageUrl = db.Column(db.String(1000))
    createdAt = db.Column(db.DateTime, nullable=False, server_default=func.now())
    updatedAt = db.Column(db.DateTime, nullable=False, server_default=func.now(), onupdate=func.now())

    albums = db.relationship('Album', back_populates='artist')
    user = db.relationship('User', back_populates='artist')
    genre = db.relationship('Genre', back_populates='artists')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'genreId': self.genreId,
            'location': self.location,
            'artistUrl': self.artistUrl,
            'description': self.description,
            'bgImageUrl': self.bgImageUrl,
            'coverImageUrl': self.coverImageUrl,
            'profileImageUrl': self.profileImageUrl,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
        }
