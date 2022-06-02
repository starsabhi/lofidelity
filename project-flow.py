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


COMPONENTS
    NAV - EK - TODO: add links to profile menu
    FOOTER - AB - REVAMP - TODO
    LOGIN - EK - DONE
    SIGNUP - EK - TODO
    SPLASH PAGE - AL - TODO
    EXPLORE PAGE - AB - TODO
    MODALS - delete, uploads, edits - EK - TODO
    ARTIST PAGE: -
        - ARTIST DETAILS and COVER PHOTO - MO - TODO
            - ALL ALBUMS CONTAINER (component) -
            - ALBUM DETAIL CONTAINER (component) -

STORES
    - users - EK - DONE
    - artists - MO/AL - DONE
    - albums - EK - DONE
    - songs - AB/EK - DONE

MUSIC PLAYER - TODO

AWS S3 - MO/AB
    - separate buckets songs vs images (2 keys/secrets)
    - 2 helper functions
    - download

BACKEND:
    DB MODELS - AL/EK - DONE
    SEEDS - AL/EK - DONE
    ROUTES -
        -artists - MO - DONE
        -albums - AB - DONE
        -songs - AB - DONE
    FORMS
        -artists - EK
        -albums - AB
        -songs - AB
        -auth - EK

TODO: NEED TO RE-MIGRATE PRODUCTION!

"""
