

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
