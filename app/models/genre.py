from .db import db
from sqlalchemy.sql import func


# autopep8: off
class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    createdAt = db.Column(db.DateTime, nullable=False, server_default=func.now())
    updatedAt = db.Column(db.DateTime, nullable=False, server_default=func.now(), onupdate=func.now())

    artists = db.relationship("Artist", back_populates="genre")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
