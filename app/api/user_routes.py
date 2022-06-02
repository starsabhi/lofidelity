from flask import Blueprint
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# get all users normalized in safe data form
@user_routes.route('/ids')
@login_required
def get_all_users():
    users = User.query.all()
    user_dict_list = [user.to_dict() for user in users]
    users_by_artistId = {user['id']: user for user in user_dict_list}
    return {'usersByUserId': users_by_artistId}
