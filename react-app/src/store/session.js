// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_SESSION_ARTIST = 'session/GET_SESSION_ARTIST'



//Regular Action Creators (implicit returns)
const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const getSessionArtist = (artist) => ({
  type: GET_SESSION_ARTIST,
  payload: artist,
});



//THUNK ACTION CREATORS:
//request to backend to restore User Session based on JWT cookie (if exists)
export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

//prettier-ignore
//request to backend to login a user and create JWT cookie if successful
export const login = ({ credential, password }) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        credential,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.'];
    }
  };

//request to backend to logout user (remove JWT token)
export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

//request to backend to signup/add user to db
export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }
};

export const getSessionArtistThunk = (userId) => async (dispatch) => {
  const response = await fetch(`/api/auth/artist/${userId}`);

  if (response.ok) {
    const artistData = await response.json();
    dispatch(getSessionArtist(artistData));
    return response;
  } else throw response;
};

//SESSION REDUCER:
const initialState = { user: null, sessionArtist: null };

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null, sessionArtist: null };
    case GET_SESSION_ARTIST:
      return { ...state, sessionArtist: action.payload };
    default:
      return state;
  }
}

//Development:

//Test login thunk action
// window.store.dispatch(
//   window.sessionActions.login({
//     credential: 'DemoFan',
//     password: 'password',
//   })
// );

//Test Restore User Thunk
//window.store.dispatch(window.sessionActions.restoreUser());

//Test signup
// window.store.dispatch(
//   window.sessionActions.signup({
//     username: 'NewUser',
//     email: 'new@user.io',
//     password: 'password',
//   })
// );

//test logout
// window.store.dispatch(window.sessionActions.logout());
