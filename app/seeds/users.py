from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demoFan = User(
        username='DemoFan', email='demofan@user.io', password='password')
    demoArtist = User(
        username='DemoArtist', email='demoartist@user.io', password='password', isArtist=True)
    loFiUser = User(
        username='LofiRocks', email='lofiRocks@user.io', password='password', isArtist=True)

    db.session.add(demoFan)
    db.session.add(demoArtist)
    db.session.add(loFiUser)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
