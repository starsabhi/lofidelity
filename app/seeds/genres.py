from app.models import db, Genre


# PK IDs 1-18
def seed_genres():
    acoustic = Genre(name='Acoustic')
    alternative = Genre(name='Alternative')
    ambient = Genre(name='Ambient')
    blues = Genre(name='Blues')
    classical = Genre(name='Classical')
    country = Genre(name='Country')
    electronic = Genre(name='Electronic')
    experimental = Genre(name='Experimental')
    folk = Genre(name='Folk')
    funk = Genre(name='Funk')
    hiphop_rap = Genre(name='Hip-Hop/Rap')
    jazz = Genre(name='Jazz')
    metal = Genre(name='Metal')
    pop = Genre(name='Pop')
    punk = Genre(name='Punk')
    soul = Genre(name='R&B/Soul')
    reggae = Genre(name='Reggae')
    rock = Genre(name='Rock')

    db.session.add(acoustic)
    db.session.add(alternative)
    db.session.add(ambient)
    db.session.add(blues)
    db.session.add(classical)
    db.session.add(country)
    db.session.add(electronic)
    db.session.add(experimental)
    db.session.add(folk)
    db.session.add(funk)
    db.session.add(hiphop_rap)
    db.session.add(jazz)
    db.session.add(metal)
    db.session.add(pop)
    db.session.add(punk)
    db.session.add(soul)
    db.session.add(reggae)
    db.session.add(rock)

    db.session.commit()


def undo_genres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
