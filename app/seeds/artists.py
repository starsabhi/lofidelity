from app.models import db, Artist

def seed_artists():
    artist1 = Artist(
        userId=2,
        genreId=1,
        name='Lofi King',
        location='California',
        artistUrl='lofiking',
        description='Bay area native with some of the hottest lofi beats in the industry',
        bgImageUrl='https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        coverImageUrl='https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        profileImageUrl='https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=960&h=640&dpr=1'
    )
    artist2 = Artist(
        userId=3,
        genreId=5,
        name='LoFi Nexus',
        location='Texas',
        artistUrl='lofinexus',
        description='Enter the lofi universe',
        bgImageUrl='https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        coverImageUrl='https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        profileImageUrl='https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&w=960&h=640&dpr=1'
    )
    artist3 = Artist(
        userId=4,
        genreId=16,
        name='Gorilla Lofi',
        location='North Carolina',
        artistUrl='gorillalofi',
        description='Splicing the sounds of the rainforest with phat beats',
        bgImageUrl='https://images.pexels.com/photos/2270167/pexels-photo-2270167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        coverImageUrl='https://images.pexels.com/photos/1534925/pexels-photo-1534925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        profileImageUrl='https://images.pexels.com/photos/7268737/pexels-photo-7268737.jpeg?auto=compress&cs=tinysrgb&w=960&h=6400&dpr=1'
    )

    db.session.add(artist1)
    db.session.add(artist2)
    db.session.add(artist3)

    db.session.commit()


def undo_artists():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
