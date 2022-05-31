from .db import db


class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)

    # attribute_name = db.relationship("OtherClassName", back_populates="other_relationship_attribute_name")
    artists = db.relationship("Artist", back_populates="genre")
