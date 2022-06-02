export const GET_SONGS = 'songs/LOAD_SONGS';
export const GET_SONG = 'songs/LOAD_ONE_SONG';
export const ADD_SONG = 'songs/RECEIVE_SONG';
export const UPDATE_SONG = 'songs/EDIT_SONG';
export const DELETE_SONG = 'songs/DELETE_SONG';

export const loadSongs = (songs) => ({
  type: GET_SONGS,
  songs,
});

export const loadOneSong = (song) => ({
  type: GET_SONG,
  song,
});

export const addSong = (song) => ({
  type: ADD_SONG,
  song,
});

export const editSong = (song) => ({
  type: UPDATE_SONG,
  song,
});

export const remove = (songId) => ({
  type: DELETE_SONG,
  songId,
});

export const getSongs = () => async (dispatch) => {
  const res = await fetch('/api/songs', {
    method: 'GET',
  });

  if (res.ok) {
    const songs = await res.json();
    dispatch(loadSongs(songs));
  }
};

export const getOneSongs = (songId) => async (dispatch) => {
  const res = await fetch(`/api/songs/${songId}`, {
    method: 'GET',
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(loadOneSong(song));
  }
};

export const deleteSong = (songId) => async (dispatch) => {
  const res = await fetch(`/api/songs/${songId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(remove(songId));
  }
};

export const edit = (id, song) => async (dispatch) => {
  const res = await fetch(`/api/songs/${id}`, {
    method: 'PATCH',
    body: song,
  });

  if (res.ok) {
    const song = await res.json();
    console.log(song);
    dispatch(editSong(song));
  }
};

export const createSong = (song) => async (dispatch) => {
  const res = await fetch('/api/songs', {
    method: 'POST',
    body: song,
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(addSong(song));
  }
};

const initialState = {};

const songsReducer = (state = initialState, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case GET_SONGS:
      action.songs.forEach((song) => {
        nextState[song.id] = song;
      });
      return nextState;
    case UPDATE_SONG:
      nextState[action.song.id] = action.song;
      return nextState;
    case ADD_SONG:
      nextState[action.song.id] = action.song;
      return nextState;
    case DELETE_SONG:
      delete nextState[action.songId];
      return nextState;
    default:
      return state;
  }
};

export default songsReducer;

// for adding route
// in python app/__init__.py
// app.register_blueprint(artist_routes, url_prefix='/api/song')
//
