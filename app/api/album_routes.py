from flask import Blueprint
from app import app
from app.models import db, Album

album_routes = Blueprint('album', __name__, url_prefix='/album')

@album_routes.route('/')
def get_all_albums():
  albums = Album.query.all()
  return {'albums': [album.to_dict() for album in albums]}


@album_routes.route('/<int:id>')
def get_one_album():
  album = Album.query.get(id)
  return album.to_dict()
