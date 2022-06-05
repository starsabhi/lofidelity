import * as SA from './song';

const GET_ALBUMS = 'album/GET_ALBUMS';
const GET_ALBUM = 'album/GET_ALBUM';
const ADD_ALBUM = 'album/ADD_ALBUM';
const UPDATE_ALBUM = 'album/UPDATE_ALBUM';
const UPDATE_ALBUM_IMAGE = 'album/UPDATE_ALBUM_IMAGE';
const DELETE_ALBUM = 'album/DELETE_ALBUM';

//Regular Action Creators (implicit returns)

const getAlbums = ({ albumsByArtistId, albumsByAlbumId }) => ({
  type: GET_ALBUMS,
  payload: { albumsByArtistId, albumsByAlbumId },
});

const getAlbum = (albumId, album) => ({
  type: GET_ALBUM,
  payload: { albumId, album },
});

const addAlbum = (artistId, albumId, album) => ({
  type: ADD_ALBUM,
  payload: { artistId, albumId, album },
});

const updateAlbum = (artistId, albumId, updatedAlbum) => ({
  type: UPDATE_ALBUM,
  payload: { artistId, albumId, updatedAlbum },
});

const updateAlbumImage = (artistId, albumId, imageUrl) => ({
  type: UPDATE_ALBUM_IMAGE,
  payload: { artistId, albumId, imageUrl },
});

const deleteAlbum = (artistId, albumId) => ({
  type: DELETE_ALBUM,
  payload: { artistId, albumId },
});

//THUNK ACTION CREATORS:
export const getAllAlbumsThunk = () => async (dispatch) => {
  const response = await fetch('/api/albums');

  if (response.ok) {
    const albumsData = await response.json();
    dispatch(getAlbums(albumsData));
    return response;
  } else throw response;
};

export const getOneAlbumThunk = (albumId) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumId}`);

  if (response.ok) {
    const albumData = await response.json();
    dispatch(getAlbum(albumId, albumData));
    return response;
  } else throw response;
};

export const addNewAlbumThunk = (formData) => async (dispatch) => {
  const response = await fetch('/api/albums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      artistId: formData.artistId,
      title: formData.title,
      releaseYear: formData.releaseYear,
      about: formData.about,
      // imageUrl: formData.imageUrl,
      price: formData.price,
    }),
  });

  if (response.ok) {
    const newAlbum = await response.json();
    dispatch(addAlbum(formData.artistId, newAlbum.id, newAlbum));
    return null;
  } else if (response.status < 500) {
    const resBody = await response.json();
    if (resBody.errors) {
      return resBody.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }

  // if (response.ok) {
  //   const newAlbum = await response.json();
  //   dispatch(addAlbum(formData.artistId, newAlbum.id, newAlbum));
  //   return response;
  // } else throw response;
};

export const updateOneAlbumThunk = (albumId, formData) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      artistId: formData.artistId,
      title: formData.title,
      releaseYear: formData.releaseYear,
      about: formData.about,
      // imageUrl: formData.imageUrl,
      price: formData.price,
    }),
  });
  console.log('Response', response);
  // const resBody = await response.json();
  // console.log('ResBody', resBody);s

  if (response.ok) {
    const updatedAlbum = await response.json();
    dispatch(updateAlbum(formData.artistId, albumId, updatedAlbum));
    return null;
  } else if (response.status < 500) {
    const resBody = await response.json();
    if (resBody.errors) {
      return resBody.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }
  // if (response.ok) {
  //   const updatedAlbum = await response.json();
  //   dispatch(updateAlbum(formData.artistId, albumId, updatedAlbum));
  //   // response.updatedAlbum = updatedAlbum;
  //   return response;
  // } else throw response;
};

export const updateAlbumImageThunk =
  (artistId, albumId, formData) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}/image`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const resBody = await response.json();
      dispatch(updateAlbumImage(artistId, albumId, resBody.url));
      return null;
    } else if (response.status < 500) {
      const resBody = await response.json();
      if (resBody.errors) {
        return resBody.errors;
      }
    } else {
      return ['An error occurred. Please try again.'];
    }

  };

export const deleteOneAlbumThunk = (artistId, albumId) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const resBody = await response.json();
    if (resBody.message === 'Success') {
      dispatch(deleteAlbum(artistId, albumId));
    }
    return resBody;
  } else throw response;
};

const initialState = { albumsByArtistId: {}, songsByAlbumId: {} };
/*
albumState = {
    albumsByArtistId: {
        artistId1: [albumObj1, albumObj2, albumObj3],
        artistId2: [albumObj1, albumObj2, albumObj3],
    },
    songsByAlbumId: {
        albumId1: [songObj1,songObj2,songObj3]
        albumId2: [songObj1,songObj2,songObj3]
    },
    albumId1: albumObj1,
    albumId2: albumObj2,
    albumId3: albumObj3,
}
*/

const albumReducer = (state = initialState, action) => {
  Object.freeze(state);
  Object.freeze(state.albumsByArtistId);
  Object.freeze(state.songsByAlbumId);

  //Deep Clone State:
  let albumsByArtistId = {};

  Object.keys(state.albumsByArtistId).forEach((key) => {
    let albumArr = [];
    state.albumsByArtistId[key].forEach((album) => {
      albumArr.push({ ...album });
    });
    albumsByArtistId[key] = albumArr;
  });

  let songsByAlbumId = {};

  Object.keys(state.songsByAlbumId).forEach((key) => {
    let albumArr = [];
    state.songsByAlbumId[key].forEach((album) => {
      albumArr.push({ ...album });
    });
    songsByAlbumId[key] = albumArr;
  });

  const newState = { ...state, albumsByArtistId, songsByAlbumId };

  Object.keys(state).forEach((key) => {
    if (key !== 'albumsByArtistId' && key !== 'songsByAlbumId') {
      let album = state[key];
      newState[album.id] = { ...album };
    }
  });

  let artistId;
  let albumId;
  let songId;
  let index;

  switch (action.type) {
    case GET_ALBUMS:
      newState.albumsByArtistId = action.payload.albumsByArtistId;

      const obj = action.payload.albumsByAlbumId;
      for (let key in obj) {
        newState[key] = obj[key];
      }
      return newState;

    case GET_ALBUM:
      albumId = action.payload.albumId;

      //add Album to album AlbumById map
      newState[albumId] = action.payload.album;
      return newState;

    case ADD_ALBUM:
      artistId = action.payload.artistId;
      albumId = action.payload.albumId;

      //add Album to end of array sorted by "releaseYear"
      newState.albumsByArtistId[artistId].push(action.payload.album);

      //re-sort array based on releaseYear in Desc order
      newState.albumsByArtistId[artistId].sort((a, b) => {
        return b.releaseYear - a.releaseYear;
      });

      //add Album placeholder to songsByAlbumId obj
      newState.songsByAlbumId[albumId] = [];

      //add Album to album AlbumById map
      newState[albumId] = action.payload.album;
      return newState;

    case UPDATE_ALBUM:
      artistId = action.payload.artistId;
      albumId = action.payload.albumId;

      //find index of album to update
      index = newState.albumsByArtistId[artistId].findIndex(
        (album) => album.id === parseInt(albumId)
      );
      //replace album in albumsByArtistId array
      newState.albumsByArtistId[artistId][index] = action.payload.updatedAlbum;

      //replace album in albumsByArtistId obj
      newState[albumId] = action.payload.updatedAlbum;
      return newState;

    case UPDATE_ALBUM_IMAGE:
      artistId = action.payload.artistId;
      albumId = action.payload.albumId;

      //find index of album to update
      index = newState.albumsByArtistId[artistId].findIndex(
        (album) => album.id === parseInt(albumId)
      );
      //replace album's imageUrl in albumsByArtistId array
      newState.albumsByArtistId[artistId][index].imageUrl =
        action.payload.imageUrl;

      //replace album in albumsByArtistId obj
      newState[albumId].imageUrl = action.payload.imageUrl;
      return newState;

    case DELETE_ALBUM:
      artistId = action.payload.artistId;
      albumId = action.payload.albumId;

      //find index of album to delete
      index = newState.albumsByArtistId[artistId].findIndex(
        (album) => album.id === parseInt(albumId)
      );
      //remove album from albumsByArtistId array
      newState.albumsByArtistId[artistId].splice(index, 1);

      //remove album from albumsByArtistId array
      delete newState.songsByAlbumId[albumId];

      //remove album from main state
      delete newState[albumId];
      return newState;

    case SA.GET_SONGS:
      //add all songsByAlbumId to state
      newState.songsByAlbumId = action.payload.songsByAlbumId;
      return newState;

    // Most likely will never use this route
    case SA.GET_SONG:
      albumId = action.payload.albumId;
      songId = action.payload.songId;

      //find index of song to update (if exists)
      index = newState.songsByAlbumId[albumId]?.findIndex(
        (song) => song.id === parseInt(songId)
      );

      if (index !== -1 && index !== undefined) {
        //if song exists in state
        //replace song in songsByAlbumId array
        newState.songsByAlbumId[albumId][index] = action.payload.song;
      } else {
        if (newState.songsByAlbumId[albumId]) {
          //add song to end of array
          newState.songsByAlbumId[albumId].push(action.payload.song);

          //sort array based on trackNumber in Asc order
          newState.songsByAlbumId[albumId].sort((a, b) => {
            return a.trackNumber - b.trackNumber;
          });
        } else {
          // add albumId property to state
          newState.songsByAlbumId[albumId] = [];
          //add song to end of array
          newState.songsByAlbumId[albumId].push(action.payload.song);
        }
      }

      return newState;

    case SA.ADD_SONG:
      albumId = action.payload.albumId;
      // songId = action.payload.songId;

      //add Song to end of array sorted by "trackNumber"
      newState.songsByAlbumId[albumId].push(action.payload.song);

      //not specifying trackNumber, when add new song
      //re-sort array based on trackNumber in Asc order
      // newState.songsByAlbumId[albumId].sort((a, b) => {
      //   return a.trackNumber - b.trackNumber;
      // });
      return newState;

    case SA.UPDATE_SONG:
      albumId = action.payload.albumId;
      songId = action.payload.songId;

      //find index of song to update
      index = newState.songsByAlbumId[albumId].findIndex(
        (song) => song.id === parseInt(songId)
      );
      //replace album in songsByAlbumId array
      newState.songsByAlbumId[albumId][index] = action.payload.updatedSong;
      return newState;

    case SA.UPDATE_SONG_TRACKS:
      albumId = action.payload.albumId;
      newState.songsByAlbumId.albumId = action.payload.songList;
      return newState;

    case SA.DELETE_SONG:
      albumId = action.payload.albumId;
      songId = action.payload.songId;

      //find index of album to delete
      index = newState.songsByAlbumId[albumId].findIndex(
        (song) => song.id === parseInt(songId)
      );

      //remove song from songsByAlbumId array
      newState.songsByAlbumId[albumId].splice(index, 1);
      return newState;

    default:
      return state;
  }
};

export default albumReducer;

//TEST THUNKS:

//RUN THESE TWO FIRST BEFORE TESTING UPDATE AND DELETE

//GET Albums and Get ONE Album
// window.store.dispatch(window.albumActions.getAllAlbumsThunk())
// window.store.dispatch(window.albumActions.getOneAlbumThunk(1))

//ADD Album
// window.store.dispatch(
//   window.albumActions.addNewAlbumThunk({
// artistId: 2,
// title: "TEST ALBUM",
// releaseYear: 2022,
// about: null,
// // imageUrl: payload.imageUrl,
// price: 11,
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})

//UPDATE Album
// window.store.dispatch(
//   window.albumActions.updateOneAlbumThunk(15,{
// artistId: 2,
// title: "UPDATE ALBUM",
// releaseYear: 2021,
// about: 'UPDATE',
// // imageUrl: payload.imageUrl,
// price: 500,
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})

//UPDATE ALBUM IMAGE
//will test with built out component

//DELETE Album
// window.store.dispatch(window.albumActions
// .deleteOneAlbumThunk(2, 14)
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})
