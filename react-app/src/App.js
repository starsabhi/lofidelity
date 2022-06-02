import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './components/LoginPage';
import SignUpForm from './components/auth/SignUpForm';

import NavBar from './components/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import Footer from './components/Footer';
// import UploadPhoto from './components/UploadPhoto';

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  //ensures that app has checked whether a user exists in the session
  const [isLoaded, setIsLoaded] = useState(false);

  //on first render, check whether jwt token credentials matches user in db,
  //if so add user to session Redux State
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      //calls setUser() if user is authenticated
      setIsLoaded(true);
    })();
  }, [dispatch]);

  //eager load users, artists, albums/songs,

  if (!isLoaded) {
    return null;
  }

  console.log(sessionUser);

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          {sessionUser ? (
            // If logged in show landing pages
            sessionUser.isArtist ? (
              // id should be dynamically update based on artist domain name form Artist table
              //create artist store with userid hasmap
              <Redirect to='/artist/testuser'></Redirect>
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
          <h1>WELCOME TO Artist Page!</h1>
        </Route>
        {/* move this route nested inside artist page */}
        <Route path='/:artistName/album/:albumName' exact={true}></Route>

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
