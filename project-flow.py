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


COMPONENTS:
    NAV - EK - DONE
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
            - EDIT artist details -  DONE
            - UPLOAD IMAGE x3 - DONE
            - NO DELETE
        - ARTIST ALBUMS
            - ADD ALBUM - AB -


        - ALBUM DETAILS
            - READ Album details - AB
            - UPDATE Album detail - AB - DONE
            - UPLOAD Album photo - AB/MO - DONE
            - DELETE Album - EK - DONE

            - SONG FUNCTIONALITY - AL
                -ADD Song - AL - DONE
                -UPDATE Song Title - AL - DONE
                -DELETE Song - AL - DONE - trackNumber update - EK
                -BONUS - change track order drag and drop form

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







BONUS - TODO:  add backend route protection so a logged in user can't update other user's things
    - passing, but bad actor could exploit
BONUS - BUG: artist can manually enter album number in url and edit info on that album regardless of ownership
BONUS: let artist view page as user (clear session state, then use session thunk to update again)
BONUS ADD delete to album page with redirect to artist page

Unhide/Un-change in Future:
    - Discover Search Bar and notification bell in Nav
    - Extra inner navbar links (merch and community)
    - Forgot Password? on login page
    - change back color of terms of use on signup page
    - add price back in


TODO: artist image link to artist page
TODO: EXTENSIVE QA OF ALL CRUD AND ROUTES AND LOG INS
TODO: Ensure all errors visible to user make sense

TODO: NEED TO RE-MIGRATE PRODUCTION!

"""
