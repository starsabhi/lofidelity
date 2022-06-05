export const GET_SONGS = 'songs/GET_SONGS';
export const GET_SONG = 'songs/GET_SONG';
export const ADD_SONG = 'songs/ADD_SONG';
export const UPDATE_SONG = 'songs/UPDATE_SONG';
export const UPDATE_SONG_TRACKS = 'songs/UPDATE_SONG_TRACKS';
export const DELETE_SONG = 'songs/DELETE_SONG';

//Regular Action Creators (implicit returns)
export const getSongs = ({ songsByAlbumId }) => ({
  type: GET_SONGS,
  payload: { songsByAlbumId },
});

export const getSong = (albumId, songId, song) => ({
  type: GET_SONG,
  payload: { albumId, songId, song },
});

export const addSong = (albumId, song) => ({
  type: ADD_SONG,
  payload: { albumId, song },
});

export const updateSong = (albumId, songId, updatedSong) => ({
  type: UPDATE_SONG,
  payload: { albumId, songId, updatedSong },
});

export const updateSongTracks = (albumId, songList) => ({
  type: UPDATE_SONG_TRACKS,
  payload: { albumId, songList },
});

export const deleteSong = (albumId, songId) => ({
  type: DELETE_SONG,
  payload: { albumId, songId },
});

//THUNK ACTION CREATORS:
export const getAllSongsThunk = () => async (dispatch) => {
  const response = await fetch('/api/songs');

  if (response.ok) {
    const songsData = await response.json();
    dispatch(getSongs(songsData));
    return response;
  } else throw response;
};

export const getOneSongThunk = (songId) => async (dispatch) => {
  const response = await fetch(`/api/songs/${songId}`);

  if (response.ok) {
    const songData = await response.json();
    dispatch(getSong(songData.albumId, songId, songData));
    return response;
  } else throw response;
};

// sends both title, albumId, trackNumber and file to s3 route
export const addNewSongThunk = (formData) => async (dispatch) => {
  const response = await fetch('/api/songs', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' }, //S3 makes own header
    body: formData,
  });

  if (response.ok) {
    const newSong = await response.json();
    dispatch(addSong(newSong.albumId, newSong));
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
  //   const newSong = await response.json();
  //   dispatch(addSong(newSong.id, newSong));
  //   return response;
  // } else throw response;
};

export const updateOneSongThunk = (songId, formData) => async (dispatch) => {
  // use for loop to iterate through song list
  const response = await fetch(`/api/songs/${songId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      albumId: formData.albumId,
      title: formData.title,
      trackNumber: formData.trackNumber,
    }),
  });

  if (response.ok) {
    const updatedSong = await response.json();
    dispatch(updateSong(formData.albumId, songId, updatedSong));
    return null;
    //   return updatedSong;
  } else if (response.status < 500) {
    const resBody = await response.json();
    if (resBody.errors) {
      return resBody.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }

  // if (response.ok) {
  //   const updatedSong = await response.json();
  //   dispatch(updateSong(formData.albumId, songId, updatedSong));
  //   // response.updatedAlbum = updatedAlbum;
  //   return updatedSong;
  // } else throw response;
};

export const updateAlbumTracksThunk =
  (albumId, formDataObj) => async (dispatch) => {
    // formDataList = {newTrackNum: songObj,newTrackNum: songObj};
    let songList = [];

    for (let key in formDataObj) {
      let trackNumber = key;
      let song = formDataObj[key];
      const response = await fetch(`/api/songs/${song.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          albumId: song.albumId,
          title: song.title,
          trackNumber: trackNumber,
        }),
      });
      if (response.ok) {
        const updatedSong = await response.json();
        songList.push(updatedSong);
        // return response;
      } else throw response;
    }

    //re-sort array based on trackNumber in Asc order
    songList.sort((a, b) => {
      return a.trackNumber - b.trackNumber;
    });

    dispatch(updateSongTracks(albumId, songList));
  };

export const deleteOneSongThunk = (albumId, songId) => async (dispatch) => {
  const response = await fetch(`/api/songs/${songId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const resBody = await response.json();
    if (resBody.message === 'Success') {
      dispatch(deleteSong(albumId, songId));
    }
    return resBody;
  } else throw response;
};

// const initialState = {};

// const songsReducer = (state = initialState, action) => {
//   const nextState = { ...state };
//   switch (action.type) {
//     case GET_SONGS:
//       action.songs.forEach((song) => {
//         nextState[song.id] = song;
//       });
//       return nextState;
//     case UPDATE_SONG:
//       nextState[action.song.id] = action.song;
//       return nextState;
//     case ADD_SONG:
//       nextState[action.song.id] = action.song;
//       return nextState;
//     case DELETE_SONG:
//       delete nextState[action.songId];
//       return nextState;
//     default:
//       return state;
//   }
// };

// export default songsReducer;

//TEST THUNKS:

//RUN THESE TWO FIRST BEFORE TESTING UPDATE AND DELETE

//GET Albums and Get ONE Album
// window.store.dispatch(window.songActions.getAllSongsThunk())
// window.store.dispatch(window.songActions.getOneSongThunk(1))

//ADD Song
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

//UPDATE Song
// window.store.dispatch(
//   window.songActions.updateOneSongThunk(6,{
//    albumId: 2,
//    title: "UPDATEd TITLE",
//    trackNumber: 1,
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})

//UPDATE ALBUM TRACKS
// formDataList = { newTrackNum: songObj, newTrackNum: songObj };

// window.store
//   .dispatch(
//     window.songActions.updateAlbumTracksThunk(6, {
//       3: {
//         id: 4,
//         albumId: 2,
//         title: 'Spring of Mind',
//         trackNumber: 1,
//       },
//       2: {
//         id: 5,
//         albumId: 2,
//         title: 'Lounge',
//         trackNumber: 2,
//       },
//       1: {
//         id: 6,
//         albumId: 2,
//         title: 'Chill Study',
//         trackNumber: 3,
//       },
//     })
//   )
//   .catch(async (res) => {
//     const resBody = await res.json();
//     console.log(res, resBody);
//   });

//DELETE SONG
// window.store.dispatch(window.songActions
// .deleteOneSongThunk(2, 6)
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})
