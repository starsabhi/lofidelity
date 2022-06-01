import { csrfFetch } from './csrf';

const LOAD_SONGS = 'songs/LOAD_SONGS';
const ADD_SONG = 'songs/RECEIVE_SONG';
const EDIT_SONG = 'songs/EDIT_SONG';
const DELETE_SONG = 'songs/DELETE_SONG';
const LOAD_ONE_SONG = 'songs/LOAD_ONE_SONG';

const loadSongs = (songs) => ({
  type: LOAD_SONGS,
  songs,
});

const loadOneSong = (song) => ({
  type: LOAD_ONE_SONG,
  song,
});

const addSong = (song) => ({
  type: ADD_SONG,
  song,
});

const editSong = (song) => ({
  type: EDIT_SONG,
  song,
});

const remove = (songId) => ({
  type: DELETE_SONG,
  songId,
});

export const getSongs = () => async (dispatch) => {
  const res = await csrfFetch('/api/songs', {
    method: 'GET',
  });

  if (res.ok) {
    const songs = await res.json();
    dispatch(loadSongs(songs));
  }
};

export const getOneSongs = (songId) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${songId}`, {
    method: 'GET',
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(loadOneSong(song));
  }
};

export const deleteSong = (songId) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${songId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(remove(songId));
  }
};

export const edit = (id, song) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}`, {
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
  const res = await csrfFetch('/api/songs', {
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
    case LOAD_SONGS:
      action.songs.forEach((song) => {
        nextState[song.id] = song;
      });
      return nextState;
    case EDIT_SONG:
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
