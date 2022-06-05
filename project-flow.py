"""

update DOCKERFILE

CREATE USER appname WITH CREATEDB PASSWORD 'examplepassword';
CREATE DATABASE dbNAme WITH OWNER appname;

update user class model
updated migration file and seed file

added other models files and seed files



#Heroku Database Commands
    github build, automatically runs the db migrate and upgrade, but not seed
#resetting database, on Heroku database GUI resets PK ids
    ~$ heroku run -a lofi-test flask db migrate
    ~$ heroku run -a lofi-test flask db upgrade
    ~$ heroku run -a lofi-test flask seed all

    ~$ heroku pg:psql postgresql-pointy-72360 --app lofi-test
        \d check tables




Initial Project Setup:
    backend:
        - added route+utils, form, and model placeholder files to backend
    frontend:
        - added store boilerplate and updated settings. added reset.css updated index.html/.css
        - updated app file and decided on overall web site flow/routes, added boilerplate components


COMPONENTS:
    NAV - EK - TODO: replace gradient with profile-image
    SIGNUP - EK - DONE - BONUS add non-existent artist route protection

    LOGIN - EK - DONE
    SPLASH PAGE - AL - DONE

    EXPLORE PAGE - AB - DONE

    MODAL - delete, uploads, edits - EK - DONE
    FOOTER - AB - DONE

    ARTIST PAGE: -
        - PROFILE and COVER PHOTO - MO - DONE
        - SECOND NAVBAR - AB/EK - DONE
        - ARTIST DETAILS
            - Edit artist details DONE
            - 3 upload modals DONE -TODO: ERROR HANDLING - MO
            - Style artist dashboard - TODO
            - NO DELETE
        - ARTIST ALBUMS
            - ADD ALBUM - AB - TODO

        - ALBUM DETAILS
            - Edit album detail - AB - DONE - TODO: styling
            - Upload album photo - AB - TODO: MO to update to match songs
            - Delete album - EK - DONE

            - SONG FUNCTIONALITY - AL
                -add song - AL - DONE
                -edit song title - AL - TODO: Styling and update song player
                -delete song - AL- DONE TODO: Fetch track numbers after deletion - EK
                -Bonus - change track order drag and drop form

 MUSIC PLAYER - MO - DONE TODO: autoplay from track select, track-play/pause on track button
 ADD GENRES TO STORE - MO - DONE - hard coded instead

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

TODO: NEED TO RE-MIGRATE PRODUCTION!

TODO: ensure continuity of error handling in frontend components (sans delete) - MO
BUG: update song player after delete - Fix track numbers and then default to track 1 after delete

BONUS: view page as user

Unhide/Unchange in Future:
    - Discover Search Bar in Nav
    - Extra inner navbar links (merch and community)
    - Forgot Password? on login page
    - change back color of terms of use on signup page

AB
    TODO: Style album detail
    -demo user can't edit someone else's stuff add to route protection in backend - passing, but need to work on fetch protection

BONUS - BUG: when click play it should start the player, not just load the song
BONUS - BUG: artist can manually enter album number in url and edit info on that album regardless of ownership

MAIN CONCERNS
    -NO DEFAULT BUTTONS
    -NO ability to change something if not logged in and doesn't belong to users
    -IF ERROR that user doesn't understand, that will be a deferral
Priority list:
    - auth
    - func
    - style

TODO: BONUS - Update form styling throughout

"""
