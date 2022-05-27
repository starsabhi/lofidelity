# Start with the python:3.9 image
FROM python:3.9

# Set the following enviroment variables

# REACT_APP_BASE_URL -> Your deployment URL
ENV REACT_APP_BASE_URL=https://lofidelity.herokuapp.com/

# FLASK_APP -> entry point to your flask app
ENV FLASK_APP=app

# FLASK_ENV -> Tell flask to use the production server
ENV FLASK_ENV=production

# SQLALCHEMY_ECHO -> Just set it to true
ENV SQLALCHEMY_ECHO=True

# Set the directory for upcoming commands to /var/www
WORKDIR /var/www

# Copy all the files from your repo to the working directory
COPY . .


# Copy the built react app (it's built for us) from the
# /react-app/build/ directory into your flasks app/static directory
COPY /react-app/build/* app/static/
## NOTE: github's continuous deployment auto builds the react app for you


# Run the next two python install commands with PIP
# install -r requirements.txt
# install psycopg2
RUN pip install -r requirements.txt
RUN pip install psycopg2


# Start the flask environment by setting our
# closing command to gunicorn app:app

## gunicorn app folder : app instance
CMD gunicorn app:app

## NOTE: gunicorn is a WSGI (web server gateway interface)
## WSGI serves flask, so flask can run in production because flask
## production server is not equipped to handle tons of requests at once
