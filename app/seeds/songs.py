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
    album10_song1 = Song(
        albumId=10,
        title='A Cozy Day',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/a-cozy-day-114852.mp3',
    )
    album10_song2 = Song(
        albumId=10,
        title='Chill out',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chillout-11168.mp3',
    )
    album10_song3 = Song(
        albumId=10,
        title='Happiness',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/happiness-113555.mp3',
    )

    # chillmore
    album11_song1 = Song(
        albumId=11,
        title='Journey Starts from One Step',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/journey-starts-from-one-step-15614.mp3',
    )
    album11_song2 = Song(
        albumId=11,
        title='Lofi Girl Dreamz',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-girl-dreams-113883.mp3',
    )
    album11_song3 = Song(
        albumId=11,
        title='Lofi X',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-x1-7250.mp3',
    )

    # Dream-Protocol
    album12_song1 = Song(
        albumId=12,
        title='Piano Roll',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/notes-piano-lofi-hiphop-12209.mp3',
    )
    album12_song2 = Song(
        albumId=12,
        title='Study',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/study-110111.mp3',
    )
    album12_song3 = Song(
        albumId=12,
        title='Why We Exist',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/why-we-exist-14057.mp3',
    )

    # TuesdayNight
    album13_song1 = Song(
        albumId=13,
        title='That Rain',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/that-rain-david-cutter-music-11855.mp3',
    )
    album13_song2 = Song(
        albumId=13,
        title='Air Hop',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/air-chill-hop-15501.mp3',
    )
    album13_song3 = Song(
        albumId=13,
        title='Object of Power',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/object-of-power120bpmfm-12298.mp3',
    )

    # virtuosound
    album14_song1 = Song(
        albumId=14,
        title='Xmas Lounge',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/christmas-lounge-11615.mp3'
    )

    album14_song2 = Song(
        albumId=14,
        title='Okay to be Sad',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lost-ambient-lofi-sad-background-music-5802.mp3'
    )

    album14_song3 = Song(
        albumId=14,
        title='Hip Hop Lofi',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/hip-hop-lo-fi-93821.mp3'
    )

    # WATRFALLKERO
    album15_song1 = Song(
        albumId=15,
        title='Chop',
        trackNumber=1,
        audioUrl='lofi-guitar-beat-with-vocal-chop-for-intro-outro-0131-12948.mp3'
    )

    album15_song2 = Song(
        albumId=15,
        title='Just Chill',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/just-chill-114854.mp3'
    )

    album15_song3 = Song(
        albumId=15,
        title='Amazing Grace',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/amazing-grace-of-christmas-11162.mp3'
    )

    # ItsWatR
    album16_song1 = Song(
        albumId=16,
        title='Urban Sounds',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/hip-hop-urban-20635.mp3'
    )

    album16_song2 = Song(
        albumId=16,
        title='So Tired',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-hip-hop-14290.mp3'
    )

    album16_song3 = Song(
        albumId=16,
        title='On the Road',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/on-the-road-113554.mp3'
    )

    # Mepa ExyZ
    album17_song1 = Song(
        albumId=17,
        title='The Bells',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/the-bells-david-cutter-music-11856.mp3'
    )

    album17_song2 = Song(
        albumId=17,
        title='Every Time we say Goodbye',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/madirfan-every-time-we-say-goodbye-acustic-version-13516.mp3'
    )

    album17_song3 = Song(
        albumId=17,
        title='Now, Relax',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/just-lofi-relax-version-60s-10899.mp3'
    )

    album18_song1 = Song(
        albumId=18,
        title='City',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/city-113551.mp3'
    )

    # prazkhanal
    album18_song2 = Song(
        albumId=18,
        title='The Feelings',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/the-feelings-lo-fi-20700.mp3'
    )

    album18_song3 = Song(
        albumId=18,
        title='Overnight',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/overnight-david-cutter-music-11737.mp3'
    )
    album19_song1 = Song(
        albumId=19,
        title='Yesterday',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/madirfan-yesterday-13464.mp3',
    )
    album19_song2 = Song(
        albumId=19,
        title='Dreaming',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-night-dreaming-ig-version-loop-01-7317.mp3',
    )
    album19_song3 = Song(
        albumId=19,
        title='Karma',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/karma-22053.mp3',
    )

    # chillmore
    album20_song1 = Song(
        albumId=20,
        title='Hype',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/hype-jing-lang-lofi-type-beat-10790.mp3',
    )
    album20_song2 = Song(
        albumId=20,
        title='Cloudy',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/cloudy-15945.mp3',
    )
    album20_song3 = Song(
        albumId=20,
        title='Ambient Spring',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/ambiance-spring-15770.mp3',
    )

    # Dream-Protocol
    album21_song1 = Song(
        albumId=21,
        title='Boogie',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/boogie-81bpm-gm-21577.mp3',
    )
    album21_song2 = Song(
        albumId=21,
        title='Coding Night',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/coding-night-112186.mp3',
    )
    album21_song3 = Song(
        albumId=21,
        title='I am Sad and Melancholic',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/i-am-sad-and-melancholic-60s-version-9681.mp3',
    )

    # TuesdayNight
    album22_song1 = Song(
        albumId=22,
        title='Like Genshin Impact',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/like-genshin-impact-lofi-ig-version-60s-9649.mp3',
    )
    album22_song2 = Song(
        albumId=22,
        title='Androids Dreaming',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-night-dreaming-ig-version-loop-02-7318.mp3',
    )
    album22_song3 = Song(
        albumId=22,
        title='Man is he Mega',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/man-is-he-mega-glbml-22045.mp3',
    )

    # virtuosound
    album23_song1 = Song(
        albumId=23,
        title='Panda',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/panda-21546.mp3'
    )

    album23_song2 = Song(
        albumId=23,
        title='Third Lane',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/third-lane-21968.mp3'
    )

    album23_song3 = Song(
        albumId=23,
        title='Travel to the City',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/travel-to-the-city-8752.mp3'
    )

    # WATRFALLKERO
    album24_song1 = Song(
        albumId=24,
        title='Pony Trek',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/pony-trek-guitar-ahmad-mousavipour-13869.mp3'
    )

    album24_song2 = Song(
        albumId=24,
        title='Memorial',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/memorias-ans-12239.mp3'
    )

    album24_song3 = Song(
        albumId=24,
        title='Another Dream',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-night-dreaming-ig-version-loop-03-7319.mp3'
    )

    # ItsWatR
    album25_song1 = Song(
        albumId=25,
        title='Clockwork',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lo-fi-hip-hop-95443.mp3'
    )

    album25_song2 = Song(
        albumId=25,
        title='Steely Jazz',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/jazz-cafe-112190.mp3'
    )

    album25_song3 = Song(
        albumId=25,
        title='Coffee and Herbs',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/coffee-and-herbs-13066.mp3'
    )

    # Mepa ExyZ
    album26_song1 = Song(
        albumId=26,
        title='Breeze',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/breeze-soothing-lo-fi-music-78bpm-13596.mp3'
    )

    album26_song2 = Song(
        albumId=26,
        title='Escape',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-escape-ig-version-60s-9650.mp3'
    )

    album26_song3 = Song(
        albumId=26,
        title='Cosmic',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/cosmic-chill-lofi-background-music-for-video-6573.mp3'
    )

    album27_song1 = Song(
        albumId=27,
        title='Jazzy Hip Hop Boom Bap',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/jazzy-hip-hop-boom-bap-111861.mp3'
    )

    # prazkhanal
    album27_song2 = Song(
        albumId=27,
        title='Good Company',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-acoustic-guitar-with-hiphop-beat-0133-12951.mp3'
    )

    album27_song3 = Song(
        albumId=27,
        title='Jury Duty',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-piano-beat-intro-0127-12945.mp3'
    )
    album28_song1 = Song(
        albumId=28,
        title='Mile High',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/mile-high-david-cutter-music-11736.mp3',
    )
    album28_song2 = Song(
        albumId=28,
        title='Rain and Nostalgia',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/rain-and-nostalgia-sad-lofi-background-music-for-videos-5800.mp3',
    )
    album28_song3 = Song(
        albumId=28,
        title='Relaxing Atmosphere',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/relaxing-atmosphere-60s-13455.mp3',
    )

    # chillmore
    album29_song1 = Song(
        albumId=29,
        title='Where to go Now',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-hip-hop-background-music-ig-version-60s-9645.mp3',
    )
    album29_song2 = Song(
        albumId=29,
        title='Elevator Bop',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/elevator-music-lofi-background-music-for-videos-5803.mp3',
    )
    album29_song3 = Song(
        albumId=29,
        title='Tula',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/tula-8511.mp3',
    )

    # Dream-Protocol
    album30_song1 = Song(
        albumId=30,
        title='Lifetime',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/jho-deep-lifetime-8910.mp3',
    )
    album30_song2 = Song(
        albumId=30,
        title='Perchance',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-acoustic-guitar-with-percussion-0134-12956.mp3',
    )
    album30_song3 = Song(
        albumId=30,
        title='Choppy Water',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-piano-beat-with-vocal-chops-0129-12947.mp3',
    )

    # TuesdayNight
    album31_song1 = Song(
        albumId=31,
        title='My Lofi Morning',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/my-lofi-morning-music-ig-version-60s-9651.mp3',
    )
    album31_song2 = Song(
        albumId=31,
        title='Sleep',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chill-sleep-version-60s-13450.mp3',
    )
    album31_song3 = Song(
        albumId=31,
        title='Dream',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/chillhop-dreaming-113882.mp3',
    )

    # virtuosound
    album32_song1 = Song(
        albumId=32,
        title='Elastic',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/elevator-music-lofi-version-30s-10822.mp3'
    )

    album32_song2 = Song(
        albumId=32,
        title='Food',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/food-vlog-kind-11204.mp3'
    )

    album32_song3 = Song(
        albumId=32,
        title='Skipping Rocks in the Sand',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/happy-ukulele-song-8347.mp3'
    )

    # WATRFALLKERO
    album33_song1 = Song(
        albumId=33,
        title='Deep Rain',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/jho-deep-rain-8599.mp3'
    )

    album33_song2 = Song(
        albumId=33,
        title='Vibe Time',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/jhoo-deep-some-vibes-7862.mp3'
    )

    album33_song3 = Song(
        albumId=33,
        title='Chill 607',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-chill-607.mp3'
    )

    # ItsWatR
    album34_song1 = Song(
        albumId=34,
        title='Requiem',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-chill-x2-7253.mp3'
    )

    album34_song2 = Song(
        albumId=34,
        title='Broken',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-rhodes-for-introoutro-0132-12949.mp3'
    )

    album34_song3 = Song(
        albumId=34,
        title='Lofi Tie',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/lofi-tie-5971.mp3'
    )

    # Mepa ExyZ
    album35_song1 = Song(
        albumId=35,
        title='Myter',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/myter-9113.mp3'
    )

    album35_song2 = Song(
        albumId=35,
        title='Nightcap',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/nightcaporiginal-lo-fi-beat-8884.mp3'
    )

    album35_song3 = Song(
        albumId=35,
        title='Softly',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/soft-lofi-beat-95425.mp3'
    )

    album36_song1 = Song(
        albumId=36,
        title='Stay at Home',
        trackNumber=1,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/stay-at-home-for-christmas-11156.mp3'
    )

    # prazkhanal
    album36_song2 = Song(
        albumId=36,
        title='Walk',
        trackNumber=2,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/walk-lofi-background-music-for-video-8452.mp3'
    )

    album36_song3 = Song(
        albumId=36,
        title='Waterfall',
        trackNumber=3,
        audioUrl='https://lofidelity-bucket.s3.amazonaws.com/waterfall-20966.mp3'
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
    album10 = [album10_song1, album10_song2, album10_song3]
    album11 = [album11_song1, album11_song2, album11_song3]
    album12 = [album12_song1, album12_song2, album12_song3]
    album13 = [album13_song1, album13_song2, album13_song3]
    album14 = [album14_song1, album14_song2, album14_song3]
    album15 = [album15_song1, album15_song2, album15_song3]
    album16 = [album16_song1, album16_song2, album16_song3]
    album17 = [album17_song1, album17_song2, album17_song3]
    album18 = [album18_song1, album18_song2, album18_song3]
    album19 = [album19_song1, album19_song2, album19_song3]
    album20 = [album20_song1, album20_song2, album20_song3]
    album21 = [album21_song1, album21_song2, album21_song3]
    album22 = [album22_song1, album22_song2, album22_song3]
    album23 = [album23_song1, album23_song2, album23_song3]
    album24 = [album24_song1, album24_song2, album24_song3]
    album25 = [album25_song1, album25_song2, album25_song3]
    album26 = [album26_song1, album26_song2, album26_song3]
    album27 = [album27_song1, album27_song2, album27_song3]
    album28 = [album28_song1, album28_song2, album28_song3]
    album29 = [album29_song1, album29_song2, album29_song3]
    album30 = [album30_song1, album30_song2, album30_song3]
    album31 = [album31_song1, album31_song2, album31_song3]
    album32 = [album32_song1, album32_song2, album32_song3]
    album33 = [album33_song1, album33_song2, album33_song3]
    album34 = [album34_song1, album34_song2, album34_song3]
    album35 = [album35_song1, album35_song2, album35_song3]
    album36 = [album36_song1, album36_song2, album36_song3]

    db.session.add_all(album1)
    db.session.add_all(album2)
    db.session.add_all(album3)
    db.session.add_all(album4)
    db.session.add_all(album5)
    db.session.add_all(album6)
    db.session.add_all(album7)
    db.session.add_all(album8)
    db.session.add_all(album9)
    db.session.add_all(album10)
    db.session.add_all(album11)
    db.session.add_all(album12)
    db.session.add_all(album13)
    db.session.add_all(album14)
    db.session.add_all(album15)
    db.session.add_all(album16)
    db.session.add_all(album17)
    db.session.add_all(album18)
    db.session.add_all(album19)
    db.session.add_all(album20)
    db.session.add_all(album21)
    db.session.add_all(album22)
    db.session.add_all(album23)
    db.session.add_all(album24)
    db.session.add_all(album25)
    db.session.add_all(album26)
    db.session.add_all(album27)
    db.session.add_all(album28)
    db.session.add_all(album29)
    db.session.add_all(album30)
    db.session.add_all(album31)
    db.session.add_all(album32)
    db.session.add_all(album33)
    db.session.add_all(album34)
    db.session.add_all(album35)
    db.session.add_all(album36)

    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
