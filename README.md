# lofidelity

Inspired by Bandcamp, lofidelity online record store and music community where passionate fans discover, connect with, and directly support the artists they love.
Welcome to check out a live version of lofidelity here: [lofi-test.com](https://lofi-test.herokuapp.com/)
![image](https://user-images.githubusercontent.com/95883222/171916446-5698e818-9764-4010-ac23-cb445dff8c01.png)

## Technologies Used
<img  src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"  height=40/><img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" height=40/><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" height=50/><img  src="https://datawookie.dev/img/logo/logo-sqlalchemy.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
.
## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
6. Change directory into react-app and install dependencies
    `npm install`
7. Start the app using:
    `npm start`

 ## Feature List

  - Splash Page
    - All visitors are able to see what lofidelity has to offer, regardless of login status.
    - If a visitor is not logged in, they will be prompted to do so.
  - Explore Page
    - Fan can view all artists on explore page.
    - They can choose particular artist to check that artist's page. 
  - Sign-up Modal:
    - User can choose to sign-up as artist or as fan 
  -  Login Pages
    - Users are able to sign in to access their account.
    - Users are able to log in as a Demo User account to test the features of the site before signing up.
  -  Artist Page (User's Full CRUD Operations)
    - Users(Artist) are able to create thier own albums.
    - Users (Artist) are able to edit and delete thier own album.
    - Users (Artist/Fan) are able to view all albums from that artist.
  - Album page:
    - Users/Fan can view all song listed in the album.
    - Users/Fan can choose perticular song and listen to it.
    - Artist can only add/udpate/delete song to that album.
   

