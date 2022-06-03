import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './components/LoginPage';
import SignUpForm from './components/auth/SignUpForm';

import NavBar from './components/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import * as sessionActions from './store/session';
import * as userActions from './store/user';
import * as artistActions from './store/artist';
import * as albumActions from './store/album';
import * as songActions from './store/song';

import Footer from './components/Footer';
import Player from './components/Player';
import ArtistPage from './components/ArtistPage';
// import UploadPhoto from './components/UploadPhoto';

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const artist = useSelector((state) => state.session.sessionArtist);


  const dispatch = useDispatch();

  //ensures that app has checked whether a user exists in the session
  // const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  // const [loaded, setLoaded] = useState(0)
  const [loaded, setLoaded] = useState(false);
  const [artistLoaded, setArtistLoaded] = useState(false);

  //on first render, check whether jwt token credentials matches user in db,
  //if so add user to session Redux State

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.authenticate()).catch((res) =>
        console.log(res)
      );
      const userPromise = dispatch(userActions.getAllUsersThunk());
      const artistPromise = dispatch(artistActions.getAllArtistsThunk());
      const albumPromise = dispatch(albumActions.getAllAlbumsThunk());
      const songsPromise = dispatch(songActions.getAllSongsThunk());

      await Promise.all([
        userPromise,
        artistPromise,
        albumPromise,
        songsPromise,
      ]);
      setLoaded(true);

    })();
  }, [dispatch]);

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(sessionActions.authenticate()).catch((res) =>
  //       console.log(res)
  //     );
  //     setLoaded(currentLoaded => currentLoaded+1)
  //     console.log('LOADED', loaded)
  //     //calls setUser() if user is authenticated
  //     setIsAuthLoaded(true);

  //     //eager load Users, Artists,Albums, Songs from in db into state
  //     dispatch(userActions.getAllUsersThunk()).then(
  //       () => setLoaded(currentLoaded => currentLoaded+1)
  //       // setIsUsersLoaded(true)
  //     );

  //     dispatch(artistActions.getAllArtistsThunk()).then(
  //       () => setLoaded(currentLoaded => currentLoaded+1)
  //       // setIsArtistLoaded(true)
  //     );

  //     dispatch(albumActions.getAllAlbumsThunk()).then(
  //       () => setLoaded(currentLoaded => currentLoaded+1)
  //       // setIsAlbumLoaded(true)
  //     );

  //     dispatch(songActions.getAllSongsThunk()).then(
  //       () => setLoaded(currentLoaded => currentLoaded+1)
  //       // setIsSongLoaded(true)
  //     );

  //   })();
  // }, [dispatch]);

  useEffect(() => {
    if (sessionUser && sessionUser.isArtist) {
      (async () => {
        await dispatch(
          sessionActions.getSessionArtistThunk(sessionUser.id)
        )

        .catch((res) => console.log(res))

      })();
    }
  }, [dispatch, sessionUser]);

  // useEffect(()=> {
  //   if (artist){
  //     setArtistLoaded(true)
  //     console.log('artist exists now')
  //   }
  //   }, [dispatch, artist])

  // if (!isAuthLoaded) {
  //   return null;
  // }

  // if (loaded < 5) {
  //   return null;
  // }
  // if (sessionUser && !sessionUser.isArtist){
  //   console.log('sessionUser && !sessionUser.isArtist')
  //   if (!loaded) return null
  // }
  // if (sessionUser && !artistLoaded) {
  //   return null;
  // }
  if (!loaded) {
    return null;
  }
  console.log('USER:', sessionUser);
  // console.log('SESSION ARTIST:', artist)

  return (
    <BrowserRouter>
      <NavBar />
      <Player />
      <Switch>
        <Route exact path='/'>
          {sessionUser ? (
            // If logged in show landing pages
            sessionUser.isArtist ? (
              // id should be dynamically update based on artist domain name form Artist table
              //create artist store with userid hasmap
              // <Redirect to={`/${artist.artistUrl}`}></Redirect>
              <Redirect to={`/${artist?.artistUrl}`}></Redirect>
            ) : (
              <Redirect to='/explore'></Redirect>
            )
          ) : (
            // else show splash page
            // <SplashPage isLoaded={isLoaded} />
            <h1>WELCOME TO SPLASH!</h1>
          )}
        </Route>
        <Route path='/explore'>
          {/* <ExplorePage isLoaded={isLoaded} /> */}
          {/* displays all the artists on the site */}
          <h1>WELCOME TO EXPLORE!</h1>
        </Route>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/:artistName' exact={true}>
          {/* redirect non-existent artist to signup form as query parameter, and update placeholder state based on query*/}
          <ArtistPage detail={false}/>
        </Route>
        <Route path='/:artistName/albums/:id'>
          {/* redirect non-existent artist to signup form as query parameter, and update placeholder state based on query*/}
          <ArtistPage detail={true}/>
        </Route>

        <Route>
          <h1>Page Not Found </h1>
        </Route>
        {/* <ProtectedRoute path='/users' exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
