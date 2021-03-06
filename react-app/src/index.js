import React from 'react';

// import './reset.css';
import './index.css';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import * as sessionActions from './store/session';
import * as userActions from './store/user';
import * as artistActions from './store/artist';
import * as albumActions from './store/album';
import * as songActions from './store/song';

//create the redux store
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

//DEVELOPMENT ONLY:
//used for debugging redux in development
//also adds csrf because separate backend/frontend servers in development
if (process.env.NODE_ENV !== 'production') {
  window.store = store; //easy access to store and its methods in browser console
  window.sessionActions = sessionActions; //test session redux state
  window.userActions = userActions; //test session redux state
  window.artistActions = artistActions; //test session redux state
  window.albumActions = albumActions; //test session redux state
  window.songActions = songActions; //test session redux state
}

//root wrapper used to wrap <App/>  in various provider components
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

//NOTE: strict mode renders components twice on development to detect errors in your code.
//thus if you have an alert, would show the alert twice
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// For testing out non-strict mode
// ReactDOM.render(<Root />, document.getElementById('root'));
