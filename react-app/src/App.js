import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './components/LoginPage';
import SignUpForm from './components/auth/SignUpForm';

import NavBar from './components/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import * as sessionActions from './store/session';
import * as userActions from './store/user';
import * as artistActions from './store/artist';
import * as albumActions from './store/album';
import * as songActions from './store/song';

import Footer from './components/Footer';
import Player from './components/Player';
import ArtistPage from './components/ArtistPage';

export default function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const artist = useSelector((state) => state.session.sessionArtist);

  const dispatch = useDispatch();

  //tracks whether session cookie has been checked
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const [artistLoaded, setArtistLoaded] = useState(false);

  //Eager load redux state on first loading of App
  //prettier-ignore
  useEffect(() => {
    (async () => {
      //on first render, check whether jwt token credentials matches user in db,
      //if so add user to session Redux State
      await dispatch(sessionActions.authenticate()).catch((res) =>console.log(res));
      setIsAuthLoaded(true);
    })();

    //eager load Users, Artists,Albums, Songs from in db into state
    dispatch(userActions.getAllUsersThunk()).catch((res) => console.log(res));
    dispatch(artistActions.getAllArtistsThunk()).catch((res) => console.log(res));
    dispatch(albumActions.getAllAlbumsThunk()).catch((res) => console.log(res));
    dispatch(songActions.getAllSongsThunk()).catch((res) => console.log(res));

  }, [dispatch]);

  // Wait for all redux state to load before entering app
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(sessionActions.authenticate()).catch((res) =>
  //       console.log(res)
  //     );
  //     const userPromise = dispatch(userActions.getAllUsersThunk());
  //     const artistPromise = dispatch(artistActions.getAllArtistsThunk());
  //     const albumPromise = dispatch(albumActions.getAllAlbumsThunk());
  //     const songsPromise = dispatch(songActions.getAllSongsThunk());
  //     await Promise.all([userPromise,artistPromise,albumPromise,songsPromise,]);
  //     setLoaded(true);
  //   })();
  // }, [dispatch]);

  // If user is an artist, fetch artist details into session state
  useEffect(() => {
    if (sessionUser && sessionUser?.isArtist) {
      (async () => {
        await dispatch(
          sessionActions.getSessionArtistThunk(sessionUser.id)
        ).catch((res) => console.log(res));
      })();
    }
  }, [dispatch, sessionUser]);

  // once artist is loaded, update state
  useEffect(() => {
    if (artist) setArtistLoaded(true);
  }, [dispatch, artist]);

  //only load App after Session Cookie is checked
  if (!isAuthLoaded) return null;

  //If session user is artist, only render app once artist is loaded into session
  if (sessionUser) {
    if (sessionUser.isArtist && !artistLoaded) return null;
  }

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
              //render cycle keeps hitting this redirect until sessionArtist State is updated
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
          <ArtistPage detail={false} />
        </Route>
        <Route path='/:artistName/albums/:id'>
          {/* redirect non-existent artist to signup form as query parameter, and update placeholder state based on query*/}
          <ArtistPage detail={true} />
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
