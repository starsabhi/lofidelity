from flask.cli import AppGroup
from .users import seed_users, undo_users
from .genres import seed_genres, undo_genres
from .artists import seed_artists, undo_artists
from .albums import seed_albums, undo_albums
from .songs import seed_songs, undo_songs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_genres()
    seed_artists()
    seed_albums()
    seed_songs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_genres()
    undo_artists()
    undo_albums()
    undo_songs()
    # Add other undo functions here
