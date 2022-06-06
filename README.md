# lofidelity

Inspired by Bandcamp, lofidelity is an online music community where passionate lofi fans discover, connect with, and directly support the artists they love.
Check out a live version of lofidelity here: [https://lofidelity.herokuapp.com](https://lofidelity.herokuapp.com)

![ZelpApp7](https://user-images.githubusercontent.com/95883222/172109787-135620c9-03c5-4603-b465-5d89209c88e2.gif)


## Technologies Used
<img  src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"  height=40/><img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" height=40/><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" height=50/><img  src="https://datawookie.dev/img/logo/logo-sqlalchemy.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/starsabhi/lofidelity.git
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
6. Change working directory into react-app and install dependencies

    `npm install`
    
7. Start the app using:

    `npm start`

 ## Feature List

  - Splash Page
    - All visitors are able to see what lofidelity has to offer, regardless of login status.
    - If a visitor is not logged in, they will be prompted to do so.
  - Discover Page
    - Users can view all artists on the Discover page.
    - They can select a particular artist to check out that artist's page. 
  - Sign-up Modal:
    - Users can choose to sign-up as an artist or as a fan.
    - Artists will be prompted to provide more details than fans to improve customability and fan interaction.
  -  Login Page:
    - Users are able to sign in to access their account.
    - Users are able to log in as a Demo Fan account or Demo Artist account to experience the site before signing up.
  -  Artist Page:
  ![ZelpApp11](https://user-images.githubusercontent.com/95883222/172137917-945fb056-8daa-4500-80c7-9e5239210de0.gif)
    - Users (Artist) are able to create thier own albums.
    - Users (Artist) are able delete thier own albums.
    - Users (Artist) are able to edit their details, bio, and profile images.
    - Users (Artist/Fan) are able to view all albums from that artist.
    - Users (Artist/Fan) are able to view that artist's details and bio.
  - Album Page:
  ![ZelpApp12](https://user-images.githubusercontent.com/95883222/172138814-16bc6294-5e6e-46c2-89e4-9a24d0609993.gif)
    - Users (Artist) are able to edit that album's details and album image.
    - Users (Artist) are able to add songs to that album.
    - Users (Artist) are able to update a song's title.
    - Users (Artist) are able to delete songs from that album.
    - Users (Artist/Fan) are able to view all songs listed in that album.
    - Users (Artist/Fan) are able to choose a song and listen to it on the song player.
  - Song Player:
  ![ZelpApp8](https://user-images.githubusercontent.com/95883222/172133084-f87cb7d2-d89c-4490-96e3-dcac8df110c9.gif)
    - Users are able to skip to different parts of a currently playing song.
    - Users are able to adjust the volume of the currently playing song.
    - Users are able to adjust the playback speed of the currently playing song.

 ## Developers
  - Abhishek Bornak
    - Github: https://github.com/starsabhi
    - LinkedIn: https://www.linkedin.com/in/abhishek-bornak-semasna514865/
  - Anthony Lovern
    - Github: https://github.com/Amlovern
  - Elan Katz
    - Github: https://github.com/otter23
    - LinkedIn: https://www.linkedin.com/in/elankatz/
  - Mark Osman
    - Github: https://github.com/thisismydisplay
    - LinkedIn: https://www.linkedin.com/in/markrockwellosman/

 ## Future Features
  - Artists will have the ability to change track order through a drag and drop menu
  - Implement Search bar functionality
  - Add Merch and Community links and functionality to inner nav bar in artist page
  - Add Forgot Password functionality to login page
  - Display price for albums and set up cart functionality
