import React, { useState, useEffect } from 'react';
//prettier-ignore
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SplashPage from './components/SplashPage';


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
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  const artists = useSelector((state) => state.artist.allArtists);

  const location = useLocation();
  const artistName = location.pathname.split('/')[1];

  //tracks whether session cookie has been checked
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const [artistLoaded, setArtistLoaded] = useState(false);

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    setArtist(artists?.filter((artist) => artist.artistUrl === artistName)[0]);
  }, [artists, artistName]);

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
    if (sessionArtist) setArtistLoaded(true);
  }, [dispatch, sessionArtist]);

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
        <Route path='/' exact={true}>
          {sessionUser ? (
            // If artist logged in show artist page
            sessionUser.isArtist ? (
              //render cycle keeps hitting this redirect until sessionArtist State is updated
              <Redirect to={`/${sessionArtist?.artistUrl}`}></Redirect>
            ) : (
              // If fan logged in show explore page
              <Redirect to='/explore'></Redirect>
            )
          ) : (
            // else show splash page
            // <SplashPage isLoaded={isLoaded} />
            <SplashPage />
          )}
        </Route>
        <Route path='/explore'>
          {/* displays all the artists on the site */}
          <h1>WELCOME TO EXPLORE!</h1>
        </Route>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-up/fan' exact={true}>
          <SignUpPage />
        </Route>
        <Route path='/sign-up/artist' exact={true}>
          <SignUpPage />
        </Route>
        {/* needs to be last route */}
        <Route path='/:artistName'>
          {/* Bonus: redirect non-existent artist to signup form as query parameter, and update placeholder state based on query*/}
          {/* TODO: render different messages depending on artist */}
          {artist ? <ArtistPage /> : <h1>Artist Does Not Exist</h1>}
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
