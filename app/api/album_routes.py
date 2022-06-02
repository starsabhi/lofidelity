from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Album
from app.forms import AlbumForm

from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

album_routes = Blueprint('albums', __name__)

# GET ALL ALBUMS - ALTERNATIVE
# @album_routes.route('/')
# def get_all_albums():
#   albums = Album.query.all()
#   return {'albums': [album.to_dict() for album in albums]}


# GET ALL ALBUMS
@album_routes.route('', methods=['GET'])
def get_all_albums():

    albums = Album.query.order_by(Album.releaseYear.desc()).all()

    # list of album dictionaries
    albums_dict_list = [album.to_dict() for album in albums]

    # normalize album dictionaries by albumId
    """
    { albumId1: albumObj1,
      albumId2: albumObj2,
      albumId3: albumObj3, }
    """
    albums_by_albumId = {album['id']: album for album in albums_dict_list}

    # list of album dictionaries by artistId
    """
    albumsByArtist: {
        artistId1: [albumObj1, albumObj2, albumObj3],
        artistId2: [albumObj1, albumObj2, albumObj3],
    },
    """
    albums_by_artistId = {}
    for album in albums_dict_list:
        if album["artistId"] in albums_by_artistId:
            albums_by_artistId[album['artistId']].append(album)
        else:
            albums_by_artistId[album['artistId']] = []
            albums_by_artistId[album['artistId']].append(album)

    return {
        'albumsByArtistId': albums_by_artistId,
        'albumsByAlbumId': albums_by_albumId,
    }


# GET ONE ALBUM BY ID
@album_routes.route('/<int:id>')
def get_one_album(id):
    album = Album.query.get(id)
    return album.to_dict()


# CREATE NEW ALBUM
@album_routes.route('', methods=['POST'])
@login_required
def create_new_album():
    form = AlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        params = dict(
            artistId=form.data['artistId'],
            title=form.data['title'],
            releaseYear=form.data['releaseYear'],
            about=form.data['about'],
            imageUrl=None,
            price=form.data['price']
        )

        new_album = Album(**params)
        db.session.add(new_album)
        db.session.commit()

        return new_album.to_dict()

    if form.errors:
        return form.errors


# UPDATE ONE ALBUM
@album_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_album(id):

    form = AlbumForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        session_album = Album.query.get(id)
        # check if album.artistId = sessionUser.userId.artistID

        session_album.artistId = form.data['artistId']
        session_album.title = form.data['title']
        session_album.releaseYear = form.data['releaseYear']
        session_album.about = form.data['about']
        session_album.price = form.data['price']

        db.session.commit()

        return session_album.to_dict()

    if form.errors:
        return form.errors


# UPDATE ALBUM IMAGE
@album_routes.route("/<int:id>/image", methods=["POST"])
@login_required
def upload_album_image(id):

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    current_album = Album.query.get(id)
    current_album.imageUrl = url
    db.session.commit()
    return {"url": url}


# DELETE ONE ALBUM
@album_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_album(id):
    album = Album.query.get(id)
    db.session.delete(album)
    db.session.commit()
    return {'message': 'Success'}


# TEST ROUTES

# GET ALL ALBUMS
# fetch("/api/albums").then(res=> res.json()).then(data => console.log(data))

# POST NEW ALBUM
# check if about can be none, can just leave property off
# Check if login required works
# fetch('/api/albums', {
#     method: 'POST',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({
#         artistId: 1,
#         title: 'This is an epic new album',
#         releaseYear: 2022,
#         about: 'NEW ALBUM',
#         price: 11.12,
#     }),
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))

# PATCH UPDATE ALBUM
# Check if login required works
# fetch('/api/albums/17', {
#     method: 'PATCH',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({
#         artistId: 1,
#         title: 'UPDATED',
#         releaseYear: 2022,
#         about: 'UPDATED',
#         price: 11.12,
#     }),
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))

# PATCH UPDATE ALBUM IMAGE
# Need to check on the frontend

# DELETE ROUTE
# fetch('/api/albums/17', {
#     method: 'DELETE'
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))
