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
        genreId=16,
        name='Gorilla Lofi',
        location='North Carolina',
        artistUrl='gorillalofi',
        description='Splicing the sounds of the rainforest with phat beats',
        bgImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-2270167.jpeg',
        coverImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-1534925.jpeg',
        profileImageUrl='https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-7268737.jpeg'
    )

    db.session.add(artist1)
    db.session.add(artist2)
    db.session.add(artist3)

    db.session.commit()


def undo_artists():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
