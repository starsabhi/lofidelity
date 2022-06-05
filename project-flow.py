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
    NAV - EK - TODO: add links to profile menu, replace gradient with profile-image
    SIGNUP - EK - DONE - BONUS add non-existent artist route protection

    LOGIN - EK - DONE
    SPLASH PAGE - AL - DONE

    EXPLORE PAGE - AB - DONE - TODO: styling

    MODAL - delete, uploads, edits - EK - DONE
    FOOTER - AB - DONE

    ARTIST PAGE: -
        - PROFILE and COVER PHOTO - MO - DONE
        - SECOND NAVBAR - AB/EK - DONE
        - ARTIST DETAILS
            - Edit artist details DONE
            - 3 upload modals DONE -TODO: ERROR HANDLING
            - Style artist dashboard - TODO
            - NO DELETE
        - ARTIST ALBUMS
            - ADD ALBUM - MO - TODO

        - ALBUM DETAILS
            - Edit album detail - AB - DONE - TODO: styling
            - Upload album photo - AB - BUG
            - Delete album - EK - DONE

            - SONG FUNCTIONALITY - AL
                -add song - AL - TODO
                -edit song title - AL - DONE - TODO: Styling
                -delete song - AL- DONE
                -Bonus - change track order drag and drop form

TODO: MUSIC PLAYER - MO - styling and buffering issues
TODO: ADD GENRES TO STORE - MO - DONE - hard coded instead

AWS S3 - MO/AB
    - TODO: bonus: separate buckets songs vs images (2 keys/secrets), 2 helper functions
    - Download - DONE
    - TODO: upload seeder data to s3 and update seeder urls

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

TODO: ensure continuity of error handling in frontend components (sans delete)
BUG: update song player after delete

BONUS: view page as user

ELAN:

Unhide/Unchange in Future:
    - Discover Search Bar in Nav
    - Extra inner navbar links (merch and community)
    - Forgot Password? on login page
    - change back color of terms of use on signup page

Anthony:
    TO DO UPDATE - LOFI MCLOFERSON - doesn't exist

AB
    - AUTH BUG: fan shouldn't be able to edit album details, also style button
    -demo user can't edit someone else's stuff add to route protection in backend

BONUS - BUG: when click play it should start the player, not just load the song
BONUS - BUG: can go to random error and it displays wrong album on page

MAIN CONCERNS
    -NO DEFAULT BUTTONS
    -NO ability to change something if not logged in and doesn't belong to users
    -IF ERROR that user doesn't understand, that will be a deferral
Priority list:
    - auth
    - func
    - style

"""
