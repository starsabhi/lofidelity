from app.models import db, Album


def seed_albums():
    album1 = Album(
        artistId=1,
        title='HifiReality',
        # release=datetime.date(2019, 12, 4).year,
        releaseYear=2012,
        about='This is a lofi album about the high points of life.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/20501846.jpeg',
        price=12.00
    )

    album2 = Album(
        artistId=1,
        title='Distinkt Denial',
        releaseYear=2014,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/639663.jpeg',
        price=7.75
    )

    album3 = Album(
        artistId=1,
        title='Beyond Generosity',
        releaseYear=2009,
        about='For the kindness inside all of us.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-andre-moura-4021521.jpg',
        price=10.01
    )

    album4 = Album(
        artistId=2,
        title='Summer Waitlist',
        releaseYear=2020,
        about='Summer vibes for the summer soul.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/skys-and-dust-2314272145.jpeg',
        price=None
    )

    album5 = Album(
        artistId=2,
        title='Water Sounds',
        releaseYear=2012,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-lofi-2314241.jpeg',
        price=11.11
    )

    album6 = Album(
        artistId=2,
        title='Steampunk Skyrise',
        releaseYear=2012,
        about='The gears and steam fuel our dreams.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-anni-roenkae-2860804.jpg',
        price=9.22
    )

    album7 = Album(
        artistId=3,
        title='Frothing Fronds',
        releaseYear=2008,
        about='The fronds sing the song of the ones lost.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-room-1398745.jpeg',
        price=None
    )

    album8 = Album(
        artistId=3,
        title='Trying Fantastically',
        releaseYear=2006,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/923f300839e8e23354366d47ee1d2966.jpeg',
        price=15.15
    )

    album9 = Album(
        artistId=3,
        title='Best of Gorilla Lofi',
        releaseYear=2022,
        about='The best of the best from Gorilla Lofi',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-anime-wallpaper-20101715484312-scaled.jpeg',
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
