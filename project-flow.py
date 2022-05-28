"""

update DOCKERFILE

CREATE USER appname WITH CREATEDB PASSWORD 'examplepassword';
CREATE DATABASE dbNAme WITH OWNER appname;

update user class model
updated migration file and seed file



#Heroku Database Commands
    github build, automatically runs the db upgrade, but not seed
#resetting database, on Heroku database GUI resets PK ids
    ~$ heroku run -a lofidelity flask db upgrade
    ~$ heroku run -a lofidelity flask seed all

    ~$ heroku pg:psql postgresql-pointy-72360 --app lofidelity
\d check tables


backend - added route+utils, form, and model placeholder files to backend
frontend - added store boilerplate and updated settings. added reset.css updated index.html/.css
updated app file and decided on overall web site flow/routes, added boilerplate components

FRONTEND
    NAV
    FOOTER
    LOGIN
    SIGNUP
    SPLASH
    STORES - users, artists, albums, songs
    COMPONENTS

MUSIC PLAYER
AWS S3

BACKEND:
    DB MODELS
    ROUTES
    FORMS
    SEEDS


TO DO:
discuss git main protection and merging

"""
