from .db import db
from sqlalchemy.sql import func


class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    createdAt = db.Column(db.DateTime, nullable=False, server_default=func.now())
    updatedAt = db.Column(db.DateTime, nullable=False, server_default=func.now(), onupdate=func.now())

    # attribute_name = db.relationship("OtherClassName", back_populates="other_relationship_attribute_name")
    artists = db.relationship("Artist", back_populates="genre")
