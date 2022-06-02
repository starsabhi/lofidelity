"""

update DOCKERFILE

CREATE USER appname WITH CREATEDB PASSWORD 'examplepassword';
CREATE DATABASE dbNAme WITH OWNER appname;

update user class model
updated migration file and seed file

added other models files and seed files



#Heroku Database Commands
    github build, automatically runs the db upgrade, but not seed
#resetting database, on Heroku database GUI resets PK ids
    ~$ heroku run -a lofidelity-test flask db migrate
    ~$ heroku run -a lofidelity-test flask db upgrade
    ~$ heroku run -a lofidelity-test flask seed all

    ~$ heroku pg:psql postgresql-pointy-72360 --app lofidelity
\d check tables




Project Setup:
    backend:
        - added route+utils, form, and model placeholder files to backend
    frontend:
        - added store boilerplate and updated settings. added reset.css updated index.html/.css
        - updated app file and decided on overall web site flow/routes, added boilerplate components

FRONTEND
    NAV - EK - add links to profile menu
    FOOTER - AB - REVAMP
    LOGIN - EK - DONE
    SIGNUP - EK
    SPLASH PAGE -
    EXPLORE PAGE -
    MODALS - delete, uploads, edits - EK
    ARTIST PAGE: -
        - ARTIST DETAILS and COVER PHOTO
        - ALL ALBUMS CONTAINER (component)
        - ALBUM DETAIL CONTAINER (component)


    STORES
      - users - EK
      - artists - MO
      - albums - EK
      - songs - Group/Abi

MUSIC PLAYER

AWS S3 - MO/Abi
    - separate buckets songs vs images (2 keys/secrets)
    - 2 helper functions
    - download

BACKEND:
    DB MODELS - AL/EK - DONE
    SEEDS - AL/EK - DONE
    ROUTES -
        -artists - MO - DONE
        -albums - AB - DONE
        -songs - Abi (revamp)
    FORMS
        -artists - EK
        -albums - AB
        -songs - Abi
        -auth - EK

TO DO: NEED TO RE-MIGRATE PRODUCTION!

"""
