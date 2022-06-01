from flask import Blueprint, request
from flask_login import login_required
from app import app
from app.models import db, Album
from app.forms import AlbumForm

album_routes = Blueprint('album', __name__, url_prefix='/album')

@album_routes.route('/')
def get_all_albums():
  albums = Album.query.all()
  return {'albums': [album.to_dict() for album in albums]}


@album_routes.route('/<int:id>')
def get_one_album(id):
  album = Album.query.get(id)
  return album.to_dict()


@album_routes.route('/', methods=['POST'])
@login_required
def create_new_album():
  form=AlbumForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():




    body = dict(
      artistId = form.data['artistId'],
      title = form.data['title'],
      release = form.data['release_year'],
      about = form.data['about'],
      imageUrl = form.data['imageUrl'],
      price = form.data['price']
    )

    new_album = Album(**body)
    db.session.add(new_album)
    db.session.commit()

    return new_album.to_dict()

  if form.errors:
    return form.errors


@album_routes.route('/<int:id>', methods=['POST'])
@login_required
def update_album(id):

  form = AlbumForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    session_album = Album.query.get(id)

    session_album.artistId = form.data['artistId']
    session_album.title = form.data['title']
    session_album.release = form.data['release_year']
    session_album.about = form.data['about']
    session_album.imageUrl = form.data['imageUrl']
    session_album.price = form.data['price']

    db.session.commit()

    return session_album.to_dict()

  if form.errors:
    return form.errors



@album_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_album(id):
  album = Album.query.get(id)
  db.session.delete(album)
  db.session.commit()
