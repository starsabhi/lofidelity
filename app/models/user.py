from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone
from sqlalchemy.sql import func
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashedPassword = db.Column(db.String(255), nullable=False)
    isArtist = db.Column(db.Boolean, nullable=False, default=False)
    createdAt = db.Column(db.DateTime, nullable=False,
                          server_default=func.now())
    updatedAt = db.Column(db.DateTime, nullable=False, server_default=func.now(),
                          onupdate=func.now())


# UPDATE users SET username = 'newuser' WHERE id=1;

    @property
    def password(self):
        return self.hashedPassword

    @password.setter
    def password(self, password):
        self.hashedPassword = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'isArtist': self.isArtist
        }
