"""

updated DOCKERFILE
CREATE USER app_name WITH CREATEDB PASSWORD 'examplepassword';
CREATE DATABASE db_Name WITH OWNER app_name;
updated user class model
updated migration file and seed file
added other models files and seed files

#Heroku Database Commands
    github build, automatically runs the db migrate and upgrade, but not db seed

#resetting database, on Heroku database GUI resets PK ids
    ~$ heroku run -a lofidelity flask db migrate
    ~$ heroku run -a lofidelity flask db upgrade
    ~$ heroku run -a lofidelity flask seed all
    ~$ heroku pg:psql postgresql-pointy-72360 --app lofi-test
        \d check tables

Initial Project Setup:
backend:
    - added route+utils, form, and model placeholder files to backend
frontend:
    - added store boilerplate and updated settings. added reset.css updated index.html/.css
    - updated app file and decided on overall web site flow/routes, added boilerplate components


Project History:

REACT COMPONENTS:
    NAV, SIGNUP, LOGIN - EK - DONE
    FORM MODAL - delete, uploads, edits - EK - DONE
    SPLASH PAGE - AL - DONE
    EXPLORE PAGE - AB - DONE
    FOOTER - AB - DONE
    ARTIST PAGE: -
        - PROFILE and COVER PHOTO - MO - DONE
        - SECOND NAVBAR - AB/EK - DONE
        - ARTIST DETAILS
            - EDIT artist details -  DONE
            - UPLOAD IMAGE x3 - DONE
            - NO DELETE
        - ARTIST ALBUMS
            - ADD ALBUM - AB - DONE
        - ALBUM DETAILS
            - READ Album details - AB - DONE
            - UPDATE Album detail - AB - DONE
            - UPLOAD Album photo - AB/MO - DONE
            - DELETE Album - EK - DONE
        - SONG FUNCTIONALITY - AL
            -ADD Song - AL - DONE
            -UPDATE Song Title - AL - DONE
            -DELETE Song - AL - DONE - trackNumber update - EK
MUSIC PLAYER - MO - DONE
GENRES - ADD TO STORE - MO - DONE - hard coded instead
AWS S3 - MO/AB
    - bonus: separate buckets songs vs images (2 keys/secrets), 2 helper functions
    - Download - DONE
    - upload seeder data to s3 and update seeder urls - DONE
FRONTEND:
    STORES
        - users - EK - DONE
        - artists - MO/AL - DONE
        - albums - EK - DONE
        - songs - AB/EK - DONE
BACKEND:
    DB MODELS - AL/EK - DONE
    SEEDS - AL/EK - DONE
    ROUTES -
        -artists - MO - DONE
        -albums - AB - DONE
        -songs - AB - DONE
    FORMS
        -artists - EK - DONE
        -albums - AB - DONE
        -songs - AB - DONE
        -auth - EK - DONE

BONUS - change album track order drag and drop form
BONUS TODO: add non-existent artist route protection/redirect
BONUS - TODO:  add backend route protection so a logged in user can't update other user's things
    - passing, but bad actor could exploit
BONUS: let artist view page as user (clear session state, then use session thunk to update again)
BONUS: ADD delete to album page with redirect to artist page
BONUS: TODO: artist and album 404 pages
BONUS: TODO: release year custom message - really made in that year " i dont think records existed back then"
BONUS: TODO: uuid in url instead of resourceIds

Unhide/Un-change in Future:
    - Discover Search Bar and notification bell in Nav
    - Extra inner navbar links (merch and community)
    - Forgot Password? on login page
    - change back color of terms of use on signup page
    - add price back in

REMINDER: EXTENSIVE QA of ROUTES
REMINDER: Ensure all errors visible to user make sense
REMINDER: NEED TO RE-MIGRATE PRODUCTION!


Project Note: Scalability and eager loading:
    -eager loading entire database is not scalable
    -better to add fetch requests to each page
    -add loading page to routes -individual thunk requests to db for each page


****************************************************************
SPRINT WEEK:

-Discover Page: - MARK
    -cover photo for our brand
    -https://pixabay.com/illustrations/music-player-music-music-background-2951399/
    -https://pixabay.com/vectors/record-player-needle-retro-dj-2385850/ (with colored background)

Splash Page: - MARK (anthony if time)
    -default brand image before setInterval starts up - empty string
    -re-add the artist links
    -one local file to start
    -update starter image
    1920-1080 for bg images

-Robust seeder data - MARK
    -12 artist - 3 photos (cover, profile, bg)
        -3 albums - 1 photo (album artwork)
            -3 songs

-Mobile Friendly:
    -footer - EK
        -add anthony linked in - EK
        -add copyright and use copyright as a link to project's github
        https://www.linkedin.com/in/anthonylovern/
        -first line: lofidelity  is a full-stack application in 2022 inspired by Bandcamp that blurb...
    -forms
        -add mobile queries to change width
        -update delete style form across all the add/edit image forms
        -add/edit song
    artist album page
        -mobile query - make albums smaller so can fit both artist side panel and 1 album
    album page
        - mobile query - change to flex-direction column so album art below, make album art smaller
        -artist profile can show up below the album art
-BUG: Routing Error BUG - EK
    - user can manually enter album number in an artist's url and the info is displayed with wrong artist profile
    -check if album's artistid matches ur;s artist id, if not render album not found for artist
-TODO: artist image link to artist page - EK

BONUS: add a search bar to nav (make mobile friendly)
    -dynamic dropdown that matches artist name
    -as type only show things that match and when click take you to artist page
BONUS: cloudfront fix http requests
BONUS: meet the developers  in profile button

"""
