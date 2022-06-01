from flask import Blueprint, request
from app.models import db, Song
from flask_login import login_required
from app.forms import SongForm

song_routes = Blueprint('songs', __name__, url_prefix='/songs')




# To get all songs
@song_routes.route('/', methods=['GET'])
def get_all_songs():
    songs = Song.query.all()
    # songs_list = [song.to_dict() for song in songs]
    return {'songs':[song.to_dict() for song in songs]}




# To get one song by its id
@song_routes.route('<int:id>', methods=['GET'])
def get_one_song(id):
    song = Song.query.filter(Song.id == id).first()
    return song.to_dict()




# To add one song
@song_routes.route('', methods=["POST"])
@login_required
def add_new_song():
    form = SongForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        params = dict(
            albumId = form.data['albumId'],
            title = form.data['title'],
            trackNumber = form.data['trackNumber'],
            audioUrl = form.data['audioUrl']
        )

        new_song = Song(**params)
        db.session.add(new_song)
        db.session.commit()

        return new_song.to_dict()

    if form.errors:
        return form.errors






# To edit the song
@song_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def edit_song(id):
    form = SongForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        one_song = Song.query.get(Song.id == id).first()

        one_song.albumId = form.data['albumId'],
        one_song.title = form.data['title'],
        one_song.trackNumber = form.data['trackNumber'],
        one_song.audioUrl = form.data['audioUrl']

        db.session.commit()

        return one_song.to_dict()

    if form.errors:
        return form.errors



# Deleting One song
@song_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_song(id):
    song = Song.query.get(Song.id == id).first()
    db.session.delete(song)
    db.session.commit()

    return {'message':'Success'}



# TEST ROUTES


# GET ALL Songs
# fetch("/api/songs").then(res=> res.json()).then(data => console.log(data))


# GET ONE Song by songId
# fetch("/api/songs/1").then(res=> res.json()).then(data => console.log(data))


# POST New Song

# fetch('/api/songs', {
#     method: 'POST',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({

#     }),
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))


# PATCH
# Check if artistUrl unique validation works
# Check if login required works

# fetch('/api/artists/4', {
#     method: 'PATCH',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({
            # albumId : '4'
            # title :  ''
            # trackNumber :
            # audioUrl :
#     }),
# })
# .then((res)=> res.json())
# .then((data)=> console.log(data))

# NO DELETE ROUTE
# fetch('/api/artists/4', {
#     method: 'DELETE',
# })
# .then((res)= > res.json())
# .then((data)= > console.log(data))
