from flask import Blueprint, request
from app.models import db, Artist
from app.forms import ArtistForm

from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

artist_routes = Blueprint("artists", __name__)


# GET ALL ARTISTS IN DATABASE
# can move to explore route if end up implementing
@artist_routes.route('/', methods=['GET'])
def get_all_artists():
    artists = Artist.query.all()

    artist_dict_list = [artist.to_dict() for artist in artists]
    artists_by_artistId = {artist["id"]: artist for artist in artist_dict_list}

    return {
        'allArtists': artist_dict_list,
        'artistsByArtistId': artists_by_artistId,
    }


# GET ONE ARTIST BY ID
@artist_routes.route('/<artistUrl>')
def get_one_artists(artistUrl):
    artist = Artist.query.filter(Artist.artistUrl == artistUrl).first()
    return artist.to_dict()


"""
If use "/" below, get FormDataRoutingRedirect error, informing you that your request
was redirected from /api/artists to /api/artists/
The URL was defined with a trailing slash so Flask will automatically redirect to
the URL with the trailing slash if it was accessed without one.
Make sure to directly send your POST-request to this URL since we can't make
browsers or HTTP clients redirect with form data reliably or without user
interaction. Note: this exception is only raised in debug mode"
"""


# ADD ARTIST - LOGGED-IN USER ONLY
@artist_routes.route('', methods=['POST'])
@login_required
def post_new_artist():

    form = ArtistForm()
    # Get csrf_token from request cookie and add to form manually
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # process data and send to db
        params = dict(
            name=form.data["name"],
            userId=form.data["userId"],
            genreId=form.data["genreId"],
            location=form.data["location"],
            artistUrl=form.data["artistUrl"],
            description=form.data["description"],
            bgImageUrl=form.data["bgImageUrl"],
            coverImageUrl=form.data["coverImageUrl"],
            profileImageUrl=form.data["profileImageUrl"],
        )

        new_artist = Artist(**params)
        db.session.add(new_artist)
        db.session.commit()

        return new_artist.to_dict()
        # return redirect("/") #backend redirect?

    # handle errors, note: automatically creates csrf error, if token not present
    if form.errors:  # check if errors exist
        # checks if artistUrl is unique
        # send errors to frontend (sends dictionary in json to frontend)
        return form.errors


# PATCH ARTIST - LOGGED-IN USER ONLY
@artist_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def patch_artist(id):

    form = ArtistForm()

    # Get csrf_token from request cookie and put into form manually
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        session_artist = Artist.query.get(id)
        # session_artist = Artist.query.filter(Artist.artistUrl == artistUrl).first()

        session_artist.name = form.data["name"]
        session_artist.userId = form.data["userId"]
        session_artist.genreId = form.data["genreId"]
        session_artist.location = form.data["location"]
        session_artist.artistUrl = form.data["artistUrl"]
        session_artist.description = form.data["description"]
        session_artist.bgImageUrl = form.data["bgImageUrl"]
        session_artist.coverImageUrl = form.data["coverImageUrl"]
        session_artist.profileImageUrl = form.data["profileImageUrl"]

        db.session.commit()

        return session_artist.to_dict()
        # return redirect("/") backend redirect?

    # handle errors, automatically creates csrf error, if token not present
    if form.errors:  # check if errors exist
        # checks if artistUrl is unique
        # send errors to frontend
        return form.errors


# we need to figure out what url for route here, and how this
# will be nested within artist form or be a separate route
@artist_routes.route("/<int:id>/upload", methods=["POST"])
@login_required
def upload_profile_image(id):
    print('in route')
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    print(url)
    print("URL^")
    # flask_login allows us to get the current user from the request
    current_artist = Artist.query.filter(Artist.userId == id).first()
    print(current_artist.profileImageUrl)
    print("current_artist^")
    current_artist.profileImageUrl = url
    # new_image = Image(user=current_user, url=url)
    db.session.commit()
    return {"url": url}


"""
state = {
    albumsByArtist: {
        artistId1: [albumObj1, albumObj2, albumObj3],
        artistId2: [albumObj1, albumObj2, albumObj3],
    },
    albumId1: albumObj1,
    albumId2: albumObj2,
    albumId3: albumObj3,
}

# /albums/artists/:artistUrl
@album_routes.route('/', methods=['GET'])
def get_all_albums():
    albums = Album.query.all()
    albums_dict_list = [album.to_dict() for album in albums]
    albums_by_albumId = {album['id']: album for album in albums_dict_list}
    albums_by_artistId = {}

    for album in albums_dict_list:
        if album.artistId in albums_by_artistId:
            albums_by_artistId[album['artistId']].append(album)
        else:
            albums_by_artistId[album['artistId']] = []
            albums_by_artistId[album['artistId']].append(album)

    return {
        'albumsByArtistId': albums_by_artistId,
        'albumsByAlbumId': albums_by_albumId,
    }
"""

# TEST ROUTES


# GET ALL ARTISTS
# fetch("/api/artists").then(res=> res.json()).then(data => console.log(data))


# GET ONE Artist by artistId
# fetch("/api/artists/lofiking").then(res=> res.json()).then(data => console.log(data))


# POST New Artist
# Check if artistUrl unique validation works
# Check if login required works

# fetch('/api/artists', {
#     method: 'POST',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify({
# name: 'Lofi Test',
# userId: 1,
# genreId: 6,
# location: 'Washington',
# artistUrl: 'lofitest',
# description: 'Ugh sequelize and express are so much better',
# bgImageUrl: 'default',
# coverImageUrl: 'default',
# profileImageUrl: 'default',
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
#       name: 'Lofi UPDATED',
#       userId: 1,
#       genreId: 10,
#       location: 'UPDATED',
#       artistUrl: 'UPDATE',
#       description: 'UPDATED',
#       bgImageUrl: 'default',
#       coverImageUrl: 'default',
#       profileImageUrl: 'default',
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
