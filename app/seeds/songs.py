from app.models import db, Song


def seed_songs():
    # lesfm
    album1_song1 = Song(
        albumId=1,
        title='Forest Lullaby',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/05/05/audio_1395e7800f.mp3?filename=forest-lullaby-110624.mp3',
    )
    album1_song2 = Song(
        albumId=1,
        title='Sedative',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/04/27/audio_30ff2fdf22.mp3?filename=sedative-110241.mp3',
    )
    album1_song3 = Song(
        albumId=1,
        title='Just relax',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/11/23/audio_64b2dd1bce.mp3?filename=just-relax-11157.mp3',
    )

    # chillmore
    album2_song1 = Song(
        albumId=2,
        title='Spring of Mind',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/03/audio_dc6ca77281.mp3?filename=spring-of-mind-16355.mp3',
    )
    album2_song2 = Song(
        albumId=2,
        title='Lounge',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/11/audio_eefc7f75b8.mp3?filename=lounge-20591.mp3',
    )
    album2_song3 = Song(
        albumId=2,
        title='Chill Study',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/01/25/audio_5f041156d1.mp3?filename=chill-study-15582.mp3',
    )

    # Dream-Protocol
    album3_song1 = Song(
        albumId=3,
        title='The Power Of The Waves',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/01/audio_354827fdc5.mp3?filename=the-power-of-the-waves-16206.mp3',
    )
    album3_song2 = Song(
        albumId=3,
        title='Into The Icy Blue',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/01/audio_e1cb9db773.mp3?filename=into-the-icy-blue-16205.mp3',
    )
    album3_song3 = Song(
        albumId=3,
        title='Fatigue (Moody Ambient Cello)',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/05/19/audio_611389b6ad.mp3?filename=fatigue-moody-ambient-cello-111663.mp3',
    )

    # TuesdayNight
    album4_song1 = Song(
        albumId=4,
        title='Synthesizer Beat Background',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/03/18/audio_b6f92dfae2.mp3?filename=synthesizer-beat-background-0164-95439.mp3',
    )
    album4_song2 = Song(
        albumId=4,
        title='Emotional Quiet Piano Background',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/01/02/audio_0300db900d.mp3?filename=emotional-quiet-piano-background-0162-13299.mp3',
    )
    album4_song3 = Song(
        albumId=4,
        title='Dark Slow Electronic Synthesizer Beat Background',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/01/03/audio_175223f4f4.mp3?filename=dark-slow-electronic-synthesizer-beat-background-0163-13385.mp3',
    )

    # virtuosound
    album5_song1 = Song(
        albumId=5,
        title='Raindrops on a Tin Roof',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/09/17/audio_5806ac1e1c.mp3?filename=chill-lofi-song-8444.mp3'
    )

    album5_song2 = Song(
        albumId=5,
        title='Waterfalls in the City',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/09/17/audio_632058ff5b.mp3?filename=moody-lofi-song-8445.mp3'
    )

    album5_song3 = Song(
        albumId=5,
        title='Skipping Rocks in the Sand',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/09/14/audio_1448718f36.mp3?filename=happy-ukulele-song-8347.mp3'
    )

    # WATRFALLKERO
    album6_song1 = Song(
        albumId=6,
        title='Gears Cranking the System',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/08/14/audio_a9f2c6ffef.mp3?filename=lofi-beat-chill-7373.mp3'
    )

    album6_song2 = Song(
        albumId=6,
        title='Steam Rising from the Streets',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/08/03/audio_9887f21f8e.mp3?filename=lofi-beat-by-kiro-5905.mp3'
    )

    album6_song3 = Song(
        albumId=6,
        title='Cogs in the Machine',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/08/03/audio_4e42170ccc.mp3?filename=space-dream-5904.mp3'
    )

    # ItsWatR
    album7_song1 = Song(
        albumId=7,
        title='The Sounds of the Eternal Pond',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/11/01/audio_67c5757bac.mp3?filename=watr-fluid-10149.mp3'
    )

    album7_song2 = Song(
        albumId=7,
        title='Croaking from the Edges',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/12/16/audio_232a4bdedf.mp3?filename=let-it-go-12279.mp3'
    )

    album7_song3 = Song(
        albumId=7,
        title='Kaeru in the Fronds',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/12/16/audio_e13e329328.mp3?filename=embrace-12278.mp3'
    )

    # Mepa ExyZ
    album8_song1 = Song(
        albumId=8,
        title='Consistent Trials',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/09/06/audio_555a888e1b.mp3?filename=mepa-exyz-physical-7978.mp3'
    )

    album8_song2 = Song(
        albumId=8,
        title='Carpe Diem for My Life',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/05/23/audio_355e9d0265.mp3?filename=mepa-exyz-latter-111806.mp3'
    )

    album8_song3 = Song(
        albumId=8,
        title='Progress At All Costs',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2021/11/16/audio_27cf0df79b.mp3?filename=mepa-exyz-easy-to-say-10806.mp3'
    )

    album9_song1 = Song(
        albumId=9,
        title='Monkeying Around',
        trackNumber=1,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/15/audio_1e79dbf2b9.mp3?filename=into-the-night-20928.mp3'
    )

    # prazkhanal
    album9_song2 = Song(
        albumId=9,
        title='The Jungle is Alive',
        trackNumber=2,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/15/audio_305f127ddf.mp3?filename=battleground-20929.mp3'
    )

    album9_song3 = Song(
        albumId=9,
        title='Banana Peels on the Sidewalk',
        trackNumber=3,
        audioUrl='https://cdn.pixabay.com/download/audio/2022/02/17/audio_bf677c5f9d.mp3?filename=sensei-21145.mp3'
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
