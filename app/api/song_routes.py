from flask import Blueprint, request
from app.models import db, Song
from flask_login import login_required
from app.forms import SongForm
from .utils import validation_errors_to_error_messages

from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

song_routes = Blueprint('songs', __name__)


# GET ALL SONGS
@song_routes.route('', methods=['GET'])
def get_all_songs():
    songs = Song.query.order_by(Song.trackNumber.asc()).all()

    # list of song dictionaries
    songs_dict_list = [song.to_dict() for song in songs]

    # list of song dictionaries by albumId
    """
    songsByAlbumId: {
        albumId1: [songObj1, songObj2, songObj3],
        albumId2: [songObj1, songObj2, songObj3],
    },
    """
    songs_by_albumId = {}
    for song in songs_dict_list:
        if song["albumId"] in songs_by_albumId:
            songs_by_albumId[song['albumId']].append(song)
        else:
            songs_by_albumId[song['albumId']] = []
            songs_by_albumId[song['albumId']].append(song)

    return {'songsByAlbumId': songs_by_albumId}


# GET ONE SONG BY ID
@song_routes.route('<int:id>', methods=['GET'])
def get_one_song(id):
    song = Song.query.get(id)
    return song.to_dict()


# # ADD ONE SONG
# @song_routes.route('', methods=["POST"])
# @login_required
# def add_new_song():
#     form = SongForm()

#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         params = dict(
#             albumId=form.data['albumId'],
#             title=form.data['title'],
#             trackNumber=form.data['trackNumber'],
#             audioUrl=form.data['audioUrl']
#         )

#         new_song = Song(**params)
#         db.session.add(new_song)
#         db.session.commit()

#         return new_song.to_dict()

#     if form.errors:
#         return form.errors


# ADD ONE SONG
@song_routes.route("", methods=["POST"])
@login_required
def add_song():

    form = SongForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        if "song" not in request.files:
            return {"errors": ["Please choose a Song file"]}, 400

        song = request.files["song"]

        if not allowed_file(song.filename):
            return {"errors": ["File type not permitted (Only .mp3, .wav, .FLAC permitted)"]}, 400

        song.filename = get_unique_filename(song.filename)

        upload = upload_file_to_s3(song)

        if "url" not in upload:
            return upload, 400

        url = upload["url"]

        albumId = form.data['albumId']

        album_last_track = Song.query.filter(
            Song.albumId == albumId).order_by(Song.trackNumber.desc()).first()

        if album_last_track:
            trackNumber = album_last_track.trackNumber + 1
        else:
            trackNumber = 1

        params = dict(
            albumId=form.data['albumId'],
            title=form.data['title'],
            trackNumber=trackNumber,
            audioUrl=url
        )

        new_song = Song(**params)
        db.session.add(new_song)
        db.session.commit()

        return new_song.to_dict()

    if form.errors:
        # return form.errors
        return {'errors': validation_errors_to_error_messages(form.errors)}, 418


# UPDATE ONE SONG
@song_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def update_song(id):
    # WHEN UPDATING AN ALBUM'S TRACK LIST
    # A PATCH WILL BE SUBMITTED IN EACH  ITEM IN LIST
    # [songObj1, songObj2, songObj3]
    # THUNK WILL ACCEPT LIST OF SONGS TO UPDATE

    form = SongForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        song_to_update = Song.query.get(id)

        song_to_update.albumId = form.data['albumId'],
        song_to_update.title = form.data['title'],
        # song_to_update.trackNumber = form.data['trackNumber'],
        # song_to_update.audioUrl = form.data['audioUrl']

        db.session.commit()

        return song_to_update.to_dict()

    if form.errors:
        # return form.errors
        return {'errors': validation_errors_to_error_messages(form.errors)}, 418


# DELETE ONE SONG
@song_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_song(id):
    songToDelete = Song.query.get(id)
    albumId = songToDelete.albumId

    album_tracks = Song.query.filter(Song.albumId == albumId).order_by(
        Song.trackNumber.asc()).all()

    found = False
    for song in album_tracks:
        if song == songToDelete:
            found = True
        elif not found:
            continue
        else:
            song.trackNumber = (song.trackNumber - 1)

    db.session.delete(songToDelete)
    db.session.commit()

    return {'message': 'Success'}


# TEST ROUTES


# GET ALL Songs
# fetch("/api/songs").then(res=> res.json()).then(data => console.log(data))


# GET ONE Song by songId
# fetch("/api/songs/4").then(res=> res.json()).then(data => console.log(data))


# POST New Song
# need to test with S3 on the front end


# PATCH
# Check if artistUrl unique validation works
# Check if login required works

# fetch('/api/songs/4', {
#     method: 'PATCH',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({
#       albumId: '2',
#       title:  'UPDATED',
#       trackNumber: 3
#     }),
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))

# NO DELETE ROUTE
# fetch('/api/songs/4', {
#     method: 'DELETE',
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))
