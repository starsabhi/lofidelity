from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Artist, Genre
from app.forms import ArtistForm
from .utils import validation_errors_to_error_messages

from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

artist_routes = Blueprint('artists', __name__)


# GET ALL ARTISTS
@artist_routes.route('', methods=['GET'])
def get_all_artists():

    artists = Artist.query.order_by(Artist.name.asc()).all()

    artist_dict_list = [artist.to_dict() for artist in artists]
    artists_by_artistId = {artist['id']: artist for artist in artist_dict_list}

    genres = Genre.query.all()
    genre_dict_list = [genre.to_dict() for genre in genres]
    artists_by_genreId = {}

    for genre in genre_dict_list:
      artists_by_genreId[genre['id']] = []

    for artist in artist_dict_list:
      artists_by_genreId[artist['genreId']].append(artist)

    # for genre in genres:
    # artistsByGenreId[genre['id']] = [Artist.query.filter(Artist.genreId == genre.id).all()]

    return {
        'allArtists': artist_dict_list,
        'artistsByArtistId': artists_by_artistId,
        'artistsByGenreId': artists_by_genreId
    }


# GET ONE ARTIST BY ID
@artist_routes.route('/<int:id>')
def get_one_artist(id):
    artist = Artist.query.get(id)
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
            bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/default-bg-image.jpeg',
            coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/default-cover-image.jpeg',
            profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/default-profile-image.jpeg',
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
        # return form.errors
        return {'errors': validation_errors_to_error_messages(form.errors)}, 418


# UPDATE ONE ARTIST - LOGGED-IN USER ONLY
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
        # session_artist.bgImageUrl = form.data["bgImageUrl"]
        # session_artist.coverImageUrl = form.data["coverImageUrl"]
        # session_artist.profileImageUrl = form.data["profileImageUrl"]

        db.session.commit()

        return session_artist.to_dict()
        # return redirect("/") backend redirect?

    # handle errors, automatically creates csrf error, if token not present
    if form.errors:  # check if errors exist
        # checks if artistUrl is unique
        # send errors to frontend
        return {'errors': validation_errors_to_error_messages(form.errors)}, 418



# UPDATE ARTIST profileImageUrl
@artist_routes.route("/<int:id>/profile", methods=["POST"])
@login_required
def upload_profile_image(id):

    if "image" not in request.files:
        return {"errors": ["Please choose an image file"]}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": ["file type not permitted"]}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    current_artist = Artist.query.get(id)
    current_artist.profileImageUrl = url
    db.session.commit()
    return {"url": url}
    # return {'message': 'Success'}


# UPDATE ARTIST coverImageUrl
@artist_routes.route("/<int:id>/cover", methods=["POST"])
@login_required
def upload_cover_image(id):

    if "image" not in request.files:
        return {"errors": ["Please choose an image file"]}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": ["file type not permitted"]}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    current_artist = Artist.query.get(id)
    current_artist.coverImageUrl = url
    db.session.commit()
    return {"url": url}


# UPDATE ARTIST bgImageUrl
@artist_routes.route("/<int:id>/background", methods=["POST"])
@login_required
def upload_background_image(id):

    if "image" not in request.files:
        return {"errors": ["Please choose an image file"]}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": ["file type not permitted"]}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    current_artist = Artist.query.get(id)
    current_artist.bgImageUrl = url
    db.session.commit()
    return {"url": url}

@artist_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_artist(id):
    artist = Artist.query.get(id)
    db.session.delete(artist)
    db.session.commit()
    return {'message': 'Success'}
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
# //bgImageUrl: 'default',
# //coverImageUrl: 'default',
# //profileImageUrl: 'default',
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
#       //bgImageUrl: 'default',
#       //coverImageUrl: 'default',
#       //profileImageUrl: 'default',
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
