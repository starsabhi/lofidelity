from app.models import db, Artist

def seed_artists():
    artist1 = Artist(
        userId=2,
        genreId=1,
        name='Lofi King',
        location='California',
        artistUrl='lofiking',
        description='Bay area native with some of the hottest lofi beats in the industry',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-219692.jpeg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-anni-roenkae-3625632.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-598917.jpeg'
    )
    artist2 = Artist(
        userId=3,
        genreId=5,
        name='LoFi Nexus',
        location='Texas',
        artistUrl='lofinexus',
        description='Enter the lofi universe',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-fiona-art-5022847.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-1252890.jpeg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/astronaut-spacewalk-iss-tools.jpeg'
    )
    artist3 = Artist(
        userId=4,
        genreId=11,
        name='Gorilla Lofi',
        location='North Carolina',
        artistUrl='gorillalofi',
        description='Splicing the sounds of the rainforest with phat beats',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/hans-eiskonen--RQ8tGcn2EY-unsplash.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-1534925.jpeg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-7268737.jpeg'
    )
    artist4 = Artist(
        userId=5,
        genreId=16,
        name='Unknown Lofi Orchestra',
        location='New Zealand',
        artistUrl='unknownlofiorchestra',
        description='Psychedelic lofi jams',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/background-6782457_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/dna-163466_1280.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/unknownlofiorchestra.png'
    )
    artist5 = Artist(
        userId=6,
        genreId=16,
        name='Ill Noise',
        location='Illinoise',
        artistUrl='illnoise',
        description='Liquid lofi soundscapes from Chicago',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/abstract-7256619_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/geometry-7289876_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/abstract-3159733_1920.jpg'
    )
    artist6 = Artist(
        userId=7,
        genreId=13,
        name='Lofragment',
        location='Quad Cities',
        artistUrl='lofragment',
        description='Fractured lofi for a fragmented world',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/abstract-background-1061100_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/ufo-1622863_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/portrait-7168743_640.jpg'
    )
    artist7 = Artist(
        userId=8,
        genreId=12,
        name='Lofi Barbeque',
        location='Kansas City',
        artistUrl='lofibbq',
        description='Sweet and Tangy lofi to nourish your soul',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/drawing-6859616.png',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/planet-581239_1280.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/dark-4736238_1920.jpg'
    )
    artist8 = Artist(
        userId=9,
        genreId=9,
        name='TriFi',
        location='Wisconsin',
        artistUrl='trifi',
        description='Slow motion, angular phasic lofi',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/uhd-6686656_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/blue-5457731_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/rave-1374722_640.jpg'
    )
    artist9 = Artist(
        userId=10,
        genreId=15,
        name='Lofi Simulator',
        location='Utah',
        artistUrl='lofisimulator',
        description='The Windows 95 of lofi music',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/retro-4237850_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/hd-wallpaper-7281586_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/chuck-yeagers-advanced-flight-simulator_6.png'
    )
    artist10 = Artist(
        userId=11,
        genreId=16,
        name='Cape Lofi',
        location='Florida',
        artistUrl='capelofi',
        description='Florida man makes lofi music',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/space-911785_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/fantasy-5316260_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/floridalofi.png'
    )
    artist11 = Artist(
        userId=12,
        genreId=16,
        name='Electric Banana Milk',
        location='New York',
        artistUrl='electricbananamilk',
        description='If you know, you know',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/summer-party-2545191_1920.jpg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/planet-1702788_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/bananamilk.png'
    )
    artist12 = Artist(
        userId=13,
        genreId=2,
        name='Sudo Cat Cat',
        location='Texas',
        artistUrl='sudocatcat',
        description='Sysadmin lofi from the void',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/triangles-1430105.png',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/colour-1885352_1920.jpg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/cat-1235232_640.jpg'
    )

    db.session.add(artist1)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)
    db.session.add(artist6)
    db.session.add(artist7)
    db.session.add(artist8)
    db.session.add(artist9)
    db.session.add(artist10)
    db.session.add(artist11)
    db.session.add(artist12)

    db.session.commit()


def undo_artists():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
