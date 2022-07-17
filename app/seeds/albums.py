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
    album10 = Album(
        artistId=4,
        title='Lo Tide',
        # release=datetime.date(2019, 12, 4).year,
        releaseYear=2013,
        about='This is a lofi album about the low points of life.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/graffiti-4235516_640.jpg',
        price=12.00
    )

    album11 = Album(
        artistId=4,
        title='Unknown Agenda',
        releaseYear=2014,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/anonymous-438427_640.jpg',
        price=7.75
    )

    album12 = Album(
        artistId=4,
        title='Beyond Now',
        releaseYear=2017,
        about='Transcending slowly.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/brain-2146817_640.png',
        price=9.99
    )

    album13 = Album(
        artistId=5,
        title='Ill Noise I',
        releaseYear=2018,
        about='Debut.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/phone-wallpaper-2681039_640.jpg',
        price=None
    )

    album14 = Album(
        artistId=5,
        title='Iller Still',
        releaseYear=2019,
        about='Back and iller than ever',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/records-2211355_640.jpg',
        price=11.11
    )

    album15 = Album(
        artistId=5,
        title='Illest',
        releaseYear=2021,
        about='Ill noise in the Covid era.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/pixel-sort-5362750_640.jpg',
        price=9.22
    )

    album16 = Album(
        artistId=6,
        title='Fracturing',
        releaseYear=2007,
        about='Disentigrating with the metronome',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/broken-6528648_640.jpg',
        price=None
    )

    album17 = Album(
        artistId=6,
        title='Decomposition',
        releaseYear=2010,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/explosion-600477_640.jpg',
        price=15.15
    )

    album18 = Album(
        artistId=6,
        title='Rebirth',
        releaseYear=2012,
        about='An album about joy and integration',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/tree-736885_640.jpg',
        price=99.99
    )
    album19 = Album(
        artistId=7,
        title='Slow Roasted Lofi',
        # release=datetime.date(2019, 12, 4).year,
        releaseYear=2009,
        about='Tasty tunes.',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/fire-1042926_640.jpg',
        price=12.00
    )

    album20 = Album(
        artistId=7,
        title='Lofi Rub',
        releaseYear=2014,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/abstract-69124_640.jpg',
        price=7.75
    )

    album21 = Album(
        artistId=7,
        title='Burnt Ends',
        releaseYear=2016,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/hd-wallpaper-171229_640.jpg',
        price=10.01
    )



    album22 = Album(
        artistId=8,
        title='Tri I',
        releaseYear=2014,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/ufo-2147931_640.jpg',
        price=11.11
    )

    album23 = Album(
        artistId=8,
        title='Tri II',
        releaseYear=2016,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/triangle-2724452_640.png',
        price=9.22
    )

    album24 = Album(
        artistId=8,
        title='Tri III',
        releaseYear=2018,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/abstract-1510190_640.png',
        price=None
    )

    album25 = Album(
        artistId=9,
        title='Take Flight',
        releaseYear=2003,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/tank-7318985_640.png',
        price=15.15
    )

    album26 = Album(
        artistId=9,
        title='Engine Failure',
        releaseYear=2008,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/pixel-5876980_640.png',
        price=99.99
    )

    album27 = Album(
        artistId=9,
        title='Crash and Burn',
        releaseYear=2011,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/donkey-kong-6065405_640.png',
        price=None
    )

    album28 = Album(
        artistId=10,
        title='Lofi Man',
        # release=datetime.date(2019, 12, 4).year,
        releaseYear=2012,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/head-663997_640.jpg',
        price=12.00
    )

    album29 = Album(
        artistId=10,
        title='Inescapable',
        releaseYear=2014,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/circle-3041437_640.jpg',
        price=7.75
    )

    album30 = Album(
        artistId=10,
        title='Heading South',
        releaseYear=2019,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/texture-1909992_640.jpg',
        price=10.01
    )

    album31 = Album(
        artistId=11,
        title='Milk the Mocha',
        releaseYear=2000,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/pixel-art-7280249_640.png',
        price=None
    )

    album32 = Album(
        artistId=11,
        title='In Jest',
        releaseYear=2004,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/store-7274767_640.png',
        price=11.11
    )

    album33 = Album(
        artistId=11,
        title='Dreams of Banana Cypress Trees',
        releaseYear=2010,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/female-7309755_640.png',
        price=9.22
    )

    album34 = Album(
        artistId=12,
        title='Curled',
        releaseYear=2019,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/sudocat1.png',
        price=None
    )

    album35 = Album(
        artistId=12,
        title='Supergrep',
        releaseYear=2021,
        about=None,
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/sudocat2.png',
        price=15.15
    )

    album36 = Album(
        artistId=12,
        title='&>/dev/null',
        releaseYear=2022,
        about='Into the void',
        imageUrl='https://lofidelity-bucket.s3.amazonaws.com/sudocat3.png',
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
    db.session.add(album10)
    db.session.add(album11)
    db.session.add(album12)
    db.session.add(album13)
    db.session.add(album14)
    db.session.add(album15)
    db.session.add(album16)
    db.session.add(album17)
    db.session.add(album18)
    db.session.add(album19)
    db.session.add(album20)
    db.session.add(album21)
    db.session.add(album22)
    db.session.add(album23)
    db.session.add(album24)
    db.session.add(album25)
    db.session.add(album26)
    db.session.add(album27)
    db.session.add(album28)
    db.session.add(album29)
    db.session.add(album30)
    db.session.add(album31)
    db.session.add(album32)
    db.session.add(album33)
    db.session.add(album34)
    db.session.add(album35)
    db.session.add(album36)

    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
