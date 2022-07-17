from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demoFan = User(
        username='DemoFan', email='demofan@user.io', password='password')
    demoArtist = User(
        username='DemoArtist', email='demoartist@user.io', password='password', isArtist=True)
    loFiUser = User(
        username='LofiRocks', email='lofirocks@user.io', password='password', isArtist=True)
    loFiBoss = User(
        username='LofiBoss', email='lofiboss@user.io', password='password', isArtist=True)
    loFiBoss2 = User(
        username='LofiBoss2', email='lofiboss2@user.io', password='password', isArtist=True)
    loFiBoss3 = User(
        username='LofiBoss3', email='lofiboss3@user.io', password='password', isArtist=True)
    loFiBoss4 = User(
        username='LofiBoss4', email='lofiboss4@user.io', password='password', isArtist=True)
    loFiBoss5 = User(
        username='LofiBoss5', email='lofiboss5@user.io', password='password', isArtist=True)
    loFiBoss6 = User(
        username='LofiBoss6', email='lofiboss6@user.io', password='password', isArtist=True)
    loFiBoss7 = User(
        username='LofiBoss7', email='lofiboss7@user.io', password='password', isArtist=True)
    loFiBoss8 = User(
        username='LofiBoss8', email='lofiboss8@user.io', password='password', isArtist=True)
    loFiBoss9 = User(
        username='LofiBoss9', email='lofiboss9@user.io', password='password', isArtist=True)
    loFiBoss10 = User(
        username='LofiBoss10', email='lofiboss10@user.io', password='password', isArtist=True)

    db.session.add(demoFan)
    db.session.add(demoArtist)
    db.session.add(loFiUser)
    db.session.add(loFiBoss)
    db.session.add(loFiBoss2)
    db.session.add(loFiBoss3)
    db.session.add(loFiBoss4)
    db.session.add(loFiBoss5)
    db.session.add(loFiBoss6)
    db.session.add(loFiBoss7)
    db.session.add(loFiBoss8)
    db.session.add(loFiBoss9)
    db.session.add(loFiBoss10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
