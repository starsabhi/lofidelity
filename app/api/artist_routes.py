from flask import Blueprint, request
from app.models import db, Artist
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

artist_routes = Blueprint("artist", __name__)

# we need to figure out what url for route here, and how this
# will be nested within artist form or be a separate route
@artist_routes.route("<:id>/upload", methods=["POST"])
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
    # flask_login allows us to get the current user from the request
    current_artist = Artist.query.filter(Artist.userId == id)
    print(current_artist)
    current_artist.profileImageUrl = url
    # new_image = Image(user=current_user, url=url)
    db.session.commit()
    return {"url": url}
