//Redux state slice to hold users from db

//ACTION TYPES:
const GET_ALL_USERS = 'users/getAllUsers';

//REGULAR ACTION CREATORS (implicit returns)

export const getAllUsers = ({ usersByUserId }) => ({
  type: GET_ALL_USERS,
  //payload: object of usersByUserId
  payload: { usersByUserId },
});

//THUNK ACTION CREATORS:

//request to backend for all users safe information in db
export const getAllUsersThunk = () => async (dispatch) => {
  const response = await fetch(`/api/users/ids`);

  if (response.ok) {
    const allUsers = await response.json();
    dispatch(getAllUsers(allUsers));
    return response;
  } else throw response;
};

//User REDUCER:
const initialState = { usersByUserId: {} }; // { usersByUserId: {userId1: userObj userId2: userObj}, }
//When map over user obj, need to first make it an array with Object.array in component

export default function userReducer(state = initialState, action) {
  Object.freeze(state);

  //Shallow Clone State:
  let newState = { ...state };

  //Deep Clone State:
  Object.keys(state.usersByUserId).forEach((key) => {
    let user = state.usersByUserId[key];
    newState.usersByUserId[key] = { ...user };
  });

  switch (action.type) {
    case GET_ALL_USERS:
      // just overwriting state entirely with data from database.
      newState.usersByUserId = action.payload.usersByUserId;
      // const obj = action.payload.usersByUserId;
      // for (let key in obj) {
      //   newState[key] = obj[key];
      // }
      return newState;
    default:
      return state;
  }
}

//TEST THUNK:

// window.store.dispatch(window.userActions.getAllUsersThunk());
