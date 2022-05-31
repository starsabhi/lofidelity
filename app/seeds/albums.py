from sqlalchemy import null
from app.models import db, Album
import datetime


def seed_albums():
    album1 = Album(
        artistId=1, title='HifiReality', release=datetime.date(2019, 12, 4).year,
        about='This is a lofi album about the high points of life.', imageUrl='https://wallpaper.dog/large/20501846.jpg',
        price=12.00
    )

    album2 = Album(
        artistId=1, title='Distinkt Denial', release=datetime.date(2014, 1, 14).year,
        about='', imageUrl='https://wallpaperaccess.com/full/639663.jpg',
        price=7.75
    )

    album3 = Album(
        artistId=1, title='Beyond Generosity', release=datetime.date(2009, 7, 11).year,
        about='For the kindness inside all of us.', imageUrl='', price=10.01
    )

    album4 = Album(
        artistId=2, title='Summer Waitlist', release=datetime.date(2020, 9, 23).year,
        about='Summer vibes for the summer soul.', imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaxYt8NE0OqBn_hjGHOAXraJOeWWB55SeGg&usqp=CAU',
        price=null
    )

    album5 = Album(
        artistId=2, title='Water Sounds', release=datetime.date(2012, 5, 17).year,
        about='', imageUrl='https://4.bp.blogspot.com/-fHSm-mcrvmQ/W0MImucp82I/AAAAAAAAHSc/-wMiDKwErWEfWUsfcBGlG8tJS2ESvZ7MQCLcBGAs/s640/Chill%2BLofi.jpg',
        price=11.11
    )

    album6 = Album(
        artistId=2, title='Steampunk Skyrise', release=datetime.date(2012, 5, 17).year,
        about='The gears and steam fuel our dreams.', imageUrl='https://wallpaperaccess.com/full/2671935.jpg',
        price=9.22
    )

    album7 = Album(
        artistId=3, title='Frothing Fronds', release=datetime.date(2008, 2, 22).year,
        about='The fronds sing the song of the ones lost.', imageUrl='https://lh3.googleusercontent.com/vQwKzQ9Q4Uu0K6j-UcB8M9tmRq8HstfPlwRduP_k5IdlUAq0J_ziIfLv3NBSwwrGQsXjUW-gOEsNOXxB0I11lWPH9g=w640-h400-e365-rj-sc0x00ffffff',
        price=null
    )

    album8 = Album(
        artistId=3, title='Trying Fantastically', release=datetime.date(2008, 2, 22).year,
        about='', imageUrl='https://i.pinimg.com/736x/92/3f/30/923f300839e8e23354366d47ee1d2966.jpg',
        price=15.15
    )

    album9 = Album(
        artistId=3, title='Best of Gorilla Lofi', release=datetime.date(2022, 5, 31).year,
        about='The best of the best from Gorilla Lofi', imageUrl='https://wallpaperforu.com/wp-content/uploads/2020/10/lofi-anime-wallpaper-20101715484312-scaled.jpg',
        price=99.99
    )

    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)
    db.session.add(album4)
    db.session.add(album5)
    db.session.add(album6)
    db.session.add(album7)
    db.session.add(album8)
    db.session.add(album9)

    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
