from app.models import db, Song


def seed_songs():
    # lesfm
    album1_song1 = Song(
        albumId=1,
        title='Forest Lullaby',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/forest-lullaby-110624.mp3',
    )
    album1_song2 = Song(
        albumId=1,
        title='Sedative',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/sedative-110241.mp3',
    )
    album1_song3 = Song(
        albumId=1,
        title='Just relax',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/just-relax-11157.mp3',
    )

    # chillmore
    album2_song1 = Song(
        albumId=2,
        title='Spring of Mind',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/spring-of-mind-16355.mp3',
    )
    album2_song2 = Song(
        albumId=2,
        title='Lounge',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lounge-20591.mp3',
    )
    album2_song3 = Song(
        albumId=2,
        title='Chill Study',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-study-15582.mp3',
    )

    # Dream-Protocol
    album3_song1 = Song(
        albumId=3,
        title='The Power Of The Waves',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/the-power-of-the-waves-16206.mp3',
    )
    album3_song2 = Song(
        albumId=3,
        title='Into The Icy Blue',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/into-the-icy-blue-16205.mp3',
    )
    album3_song3 = Song(
        albumId=3,
        title='Fatigue (Moody Ambient Cello)',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/fatigue-moody-ambient-cello-111663.mp3',
    )

    # TuesdayNight
    album4_song1 = Song(
        albumId=4,
        title='Synthesizer Beat Background',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/synthesizer-beat-background-0164-95439.mp3',
    )
    album4_song2 = Song(
        albumId=4,
        title='Emotional Quiet Piano Background',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/emotional-quiet-piano-background-0162-13299.mp3',
    )
    album4_song3 = Song(
        albumId=4,
        title='Dark Slow Electronic Synthesizer Beat Background',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/dark-slow-electronic-synthesizer-beat-background-0163-13385.mp3',
    )

    # virtuosound
    album5_song1 = Song(
        albumId=5,
        title='Raindrops on a Tin Roof',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-lofi-song-8444.mp3'
    )

    album5_song2 = Song(
        albumId=5,
        title='Waterfalls in the City',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/moody-lofi-song-8445.mp3'
    )

    album5_song3 = Song(
        albumId=5,
        title='Skipping Rocks in the Sand',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/happy-ukulele-song-8347.mp3'
    )

    # WATRFALLKERO
    album6_song1 = Song(
        albumId=6,
        title='Gears Cranking the System',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-beat-chill-7373.mp3'
    )

    album6_song2 = Song(
        albumId=6,
        title='Steam Rising from the Streets',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-beat-by-kiro-5905.mp3'
    )

    album6_song3 = Song(
        albumId=6,
        title='Cogs in the Machine',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/space-dream-5904.mp3'
    )

    # ItsWatR
    album7_song1 = Song(
        albumId=7,
        title='The Sounds of the Eternal Pond',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/watr-fluid-10149.mp3'
    )

    album7_song2 = Song(
        albumId=7,
        title='Croaking from the Edges',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/let-it-go-12279.mp3'
    )

    album7_song3 = Song(
        albumId=7,
        title='Kaeru in the Fronds',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/embrace-12278.mp3'
    )

    # Mepa ExyZ
    album8_song1 = Song(
        albumId=8,
        title='Consistent Trials',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/mepa-exyz-physical-7978.mp3'
    )

    album8_song2 = Song(
        albumId=8,
        title='Carpe Diem for My Life',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/mepa-exyz-latter-111806.mp3'
    )

    album8_song3 = Song(
        albumId=8,
        title='Progress At All Costs',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/mepa-exyz-easy-to-say-10806.mp3'
    )

    album9_song1 = Song(
        albumId=9,
        title='Monkeying Around',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/into-the-night-20928.mp3'
    )

    # prazkhanal
    album9_song2 = Song(
        albumId=9,
        title='The Jungle is Alive',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/battleground-20929.mp3'
    )

    album9_song3 = Song(
        albumId=9,
        title='Banana Peels on the Sidewalk',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/sensei-21145.mp3'
    )

    album1 = [album1_song1, album1_song2, album1_song3]
    album2 = [album2_song1, album2_song2, album2_song3]
    album3 = [album3_song1, album3_song2, album3_song3]
    album4 = [album4_song1, album4_song2, album4_song3]
    album5 = [album5_song1, album5_song2, album5_song3]
    album6 = [album6_song1, album6_song2, album6_song3]
    album7 = [album7_song1, album7_song2, album7_song3]
    album8 = [album8_song1, album8_song2, album8_song3]
    album9 = [album9_song1, album9_song2, album9_song3]

    db.session.add_all(album1)
    db.session.add_all(album2)
    db.session.add_all(album3)
    db.session.add_all(album4)
    db.session.add_all(album5)
    db.session.add_all(album6)
    db.session.add_all(album7)
    db.session.add_all(album8)
    db.session.add_all(album9)

    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
