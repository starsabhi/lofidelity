

const ADD_ALBUM = 'album/ADD_ALBUM';
const GET_ALBUMS = 'album/GET_ALBUMS';
const UPDATE_ALBUM = 'album/UPDATE_ALBUM';
const DELETE_ALBUM = 'album/DELETE_ALBUM';

const addAlbum = album => ({
  type: ADD_ALBUM,
  album
});

const getAlbums = list => ({
  type: GET_ALBUMS,
  list
});

const updateAlbum = album => ({
  type: UPDATE_ALBUM,
  album
});

const deleteAlbum = album => ({
  type: DELETE_ALBUM,
  album
});

export const getAllAlbums = () => async dispatch => {
  const response = await fetch('/album');

  if (response.ok) {
    const albumList = await response.json();
    dispatch(getAlbums(albumList))
  };
};

export const addNewAlbum = payload => async dispatch => {
  const response = await fetch('/album', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      artistId: payload.artistId,
      title: payload.title,
      release: payload.release,
      about: payload.about,
      imageUrl: payload.imageUrl,
      price: payload.price
    })
  });

  if (response.ok) {
    const newAlbum = await response.json();
    dispatch(addAlbum(newAlbum));
    return newAlbum;
  };
};

export const updateOneAlbum = payload => async dispatch => {
  const response = await fetch(`/album/${payload.albumId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      artistId: payload.artistId,
      title: payload.title,
      release: payload.release,
      about: payload.about,
      imageUrl: payload.imageUrl,
      price: payload.price
    })
  });

  if (response.ok) {
    const updatedAlbum = await response.json();
    dispatch(updateAlbum(updatedAlbum));
    return updatedAlbum;
  };
};

export const deleteOneAlbum = albumId => async dispatch => {
  const response = await fetch(`album/${albumId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const deletedAlbum = await response.json();
    dispatch(deleteAlbum(deletedAlbum));
  };
};


const initialState = {};

const albumReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ALBUM:
      if (!state[action.album.id]) {
        const newState = {
          ...state,
          [action.album.id]: action.album
        };
        return newState
      };
      return {
        ...state,
        [action.album.id]: {
          ...state[action.album.id],
          ...action.album
        }
      }
    case UPDATE_ALBUM:
      const updatedState = {
        ...state,
      }
      updatedState[action.album.id].artistId = action.album.artistId;
      updatedState[action.album.id].title = action.album.title;
      updatedState[action.album.id].release = action.album.release;
      updatedState[action.album.id].about = action.album.about;
      updatedState[action.album.id].imageUrl = action.album.imageUrl;
      updatedState[action.album.id].price = action.album.price
      return updatedState
    case GET_ALBUMS:
      const allAlbums = {};
      action.list.forEach(album => {
        allAlbums[album.id] = album;
      });
      return {
        ...allAlbums,
        ...state,
      };
    case DELETE_ALBUM:
      const postDeletionState = {
        ...state,
      };
      delete postDeletionState[action.album.id];
      return postDeletionState;
    default:
      return state;
  };
};

export default albumReducer;
