const GET_ARTISTS = 'artist/GET_ARTISTS';
const GET_ARTIST = 'artist/GET_ARTIST';
const ADD_ARTIST = 'artist/ADD_ARTIST';
const UPDATE_ARTIST = 'artist/UPDATE_ARTIST';
const UPDATE_ARTIST_IMAGE = 'artist/UPDATE_ARTIST_IMAGE';
const DELETE_ARTIST = 'artist/DELETE_ARTIST';

//Regular Action Creators (implicit returns)

const getArtists = ({ allArtists, artistsByArtistId, artistsByGenreId }) => ({
  type: GET_ARTISTS,
  payload: { allArtists, artistsByArtistId, artistsByGenreId },
});

const getArtist = (artistId, artist) => ({
  type: GET_ARTIST,
  payload: { artistId, artist },
});

const addArtist = (artistId, genreId, artist) => ({
  type: ADD_ARTIST,
  payload: { artistId, genreId, artist },
});

const updateArtist = (oldGenreId, newGenreId, artistId, updatedArtist) => ({
  type: UPDATE_ARTIST,
  payload: { oldGenreId, newGenreId, artistId, updatedArtist },
});

const updateArtistImage = (genreId, artistId, imageUrl, imageType) => ({
  type: UPDATE_ARTIST_IMAGE,
  payload: { genreId, artistId, imageUrl, imageType },
});

const deleteArtist = (genreId, artistId) => ({
  type: DELETE_ARTIST,
  payload: { genreId, artistId },
});

//THUNK ACTION CREATORS:
export const getAllArtistsThunk = () => async (dispatch) => {
  const response = await fetch('/api/artists');

  if (response.ok) {
    const artistsData = await response.json();
    dispatch(getArtists(artistsData));
    return response;
  } else throw response;
};

export const getOneArtistThunk = (artistId) => async (dispatch) => {
  const response = await fetch(`/api/artists/${artistId}`);

  if (response.ok) {
    const artistData = await response.json();
    dispatch(getArtist(artistId, artistData));
    return response;
  } else throw response;
};

export const addNewArtistThunk = (formData) => async (dispatch) => {
  const response = await fetch('/api/artists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      userId: formData.userId,
      genreId: formData.genreId,
      location: formData.location,
      artistUrl: formData.artistUrl,
      description: formData.description,

      // bgImageUrl: formData.bgImageUrl,
      // coverImageUrl: formData.coverImageUrl,
      // profileImageUrl: formData.profileImageUrl,
    }),
  });

  if (response.ok) {
    const newArtist = await response.json();
    dispatch(addArtist(newArtist.id, formData.genreId, newArtist));
    return response;
  } else throw response;
};

export const updateOneArtistThunk =
  (artist, formData) => async (dispatch) => {
    let oldGenreId = artist.genreId
    const response = await fetch(`/api/artists/${artist.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        userId: formData.userId,
        genreId: formData.genreId,
        location: formData.location,
        artistUrl: formData.artistUrl,
        description: formData.description,

        // bgImageUrl: formData.bgImageUrl,
        // coverImageUrl: formData.coverImageUrl,
        // profileImageUrl: formData.profileImageUrl,
      }),
    });

    if (response.ok) {
      const updatedArtist = await response.json();
      dispatch(updateArtist(oldGenreId, formData.genreId, artist.id, updatedArtist));
      // response.updatedArtist = updatedArtist;
      return response;
    } else throw response;
  };

export const updateArtistImageThunk =
  //imageType is 'profile', 'cover', or 'background'
  (genreId, artistId, formData, imageType) => async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}/${imageType}`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const resBody = await response.json();
      dispatch(updateArtistImage(genreId, artistId, resBody.url, imageType));
      return response;
    } else throw response;
  };

export const deleteOneArtistThunk = (genreId, artistId) => async (dispatch) => {
  const response = await fetch(`/api/artists/${artistId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const resBody = await response.json();
    if (resBody.message === 'Success') {
      dispatch(deleteArtist(genreId, artistId));
    }
    return response;
  } else throw response;
};

const initialState = { artistsByGenreId: {} , artistsByArtistId: {}, allArtists: []};
/*
artistState = {
    artistsByGenreId: {
      genreId1: [artistObj1, artistObj2, artistObj3]
      genreId2: [artistObj1, artistObj2, artistObj3]
    }

    artistsByArtistId: {
      artistId1: artistObj1,
      artistId2: artistObj2,
      artistId3: artistObj3,
    }

    allArtists : [artistObj1, artistObj2, artistObj3]
}
*/

const artistReducer = (state = initialState, action) => {
  Object.freeze(state);
  Object.freeze(state.artistsByGenreId);
  Object.freeze(state.artistsByArtistId);
  Object.freeze(state.allArtists);

  //Deep Clone State:
  let artistsByGenreId = {};
  let artistsByArtistId = {};
  let allArtists = [];

  Object.keys(state.artistsByGenreId).forEach((key) => {
    let artistArr = [];
    state.artistsByGenreId[key].forEach((artist) => {
      artistArr.push({ ...artist });
    });
    artistsByGenreId[key] = artistArr;
  });

  Object.keys(state.artistsByArtistId).forEach((key) => {
    let artist = state.artistsByArtistId[key];
    artistsByArtistId[artist.id] = { ...artist };
  });

  state.allArtists.forEach((artist) => {
    allArtists.push({ ...artist });
  });

  const newState = {
    ...state,
    artistsByGenreId,
    artistsByArtistId,
    allArtists,
  };

  let artistId;
  let genreId;
  let index;

  switch (action.type) {
    case GET_ARTISTS:
      newState.allArtists = action.payload.allArtists;
      newState.artistsByArtistId = action.payload.artistsByArtistId;
      newState.artistsByGenreId = action.payload.artistsByGenreId;

      return newState;

    case GET_ARTIST:
      artistId = action.payload.artistId;

      //add artist to artist artistById map
      newState.artistsByArtistId[artistId] = action.payload.artist;
      return newState;

    case ADD_ARTIST:
      artistId = action.payload.artistId;
      genreId = action.payload.genreId;

      //add Artist to end of array sorted by "releaseYear"
      newState.artistsByGenreId[genreId].push(action.payload.artist);

      //re-sort array based on releaseYear in Desc order
      newState.artistsByGenreId[genreId].sort((a, b) => {
        return a.name - b.name;
      });

      newState.artistsByArtistId[artistId] = action.payload.artist;

      newState.allArtists.push(action.payload.artist);

      newState.allArtists.sort((a, b) => {
        return a.name - b.name;
      });

      return newState;

    case UPDATE_ARTIST:
      let oldGenreId = action.payload.oldGenreId;
      let newGenreId = action.payload.newGenreId;
      artistId = action.payload.artistId;

      if (oldGenreId === newGenreId){

      //find index of artist to update in artistsByGenreId
      index = newState.artistsByGenreId[newGenreId].findIndex(
        (artist) => artist.id === parseInt(artistId)
      );
      //replace artist in artistsByGenreId array
      newState.artistsByGenreId[newGenreId][index] = action.payload.updatedArtist;
      } else {
        let oldIndex = newState.artistsByGenreId[oldGenreId].findIndex(
          (artist) => artist.id === parseInt(artistId)
        );
        newState.artistsByGenreId[oldGenreId].splice(oldIndex, 1);
        newState.artistsByGenreId[newGenreId].push(action.payload.updatedArtist)
        newState.artistsByGenreId[newGenreId].sort((a, b) => {
          return a.name - b.name;
        });
      }
      //replace artist in artistByArtistId
      newState.artistsByArtistId[artistId] = action.payload.updatedArtist;

      //find index of artist to update in artistsByGenreId
      index = newState.allArtists.findIndex(
        (artist) => artist.id === parseInt(artistId)
      );

      //replace artist in allArtists
      newState.allArtists[index] = action.payload.updatedArtist;
      return newState;

    case UPDATE_ARTIST_IMAGE:
      genreId = action.payload.genreId;
      artistId = action.payload.artistId;
      let imageType = action.payload.imageType;

      if (imageType === 'profile') {
        index = newState.artistsByGenreId[genreId].findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in artistsByGenreId array
        newState.artistsByGenreId[genreId][index].profileImageUrl =
          action.payload.ImageUrl;
        newState.artistsByArtistId[artistId].profileImageUrl =
          action.payload.ImageUrl;

        //find index of artist to update in artistsByGenreId
        index = newState.allArtists.findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in allArtists
        newState.allArtists[index].profileImageUrl = action.payload.ImageUrl;
      } else if (imageType === 'cover') {
        index = newState.artistsByGenreId[genreId].findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in artistsByGenreId array
        newState.artistsByGenreId[genreId][index].coverImageUrl =
          action.payload.ImageUrl;
        newState.artistsByArtistId[artistId].coverImageUrl =
          action.payload.ImageUrl;

        //find index of artist to update in artistsByGenreId
        index = newState.allArtists.findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in allArtists
        newState.allArtists[index].coverImageUrl = action.payload.ImageUrl;
      } else if (imageType === 'background') {
        index = newState.artistsByGenreId[genreId].findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in artistsByGenreId array
        newState.artistsByGenreId[genreId][index].bgImageUrl =
          action.payload.ImageUrl;
        newState.artistsByArtistId[artistId].bgImageUrl =
          action.payload.ImageUrl;

        //find index of artist to update in artistsByGenreId
        index = newState.allArtists.findIndex(
          (artist) => artist.id === parseInt(artistId)
        );

        //replace artist in allArtists
        newState.allArtists[index].bgImageUrl = action.payload.ImageUrl;
      }

      //replace artist in artistByArtistId

      return newState;

    case DELETE_ARTIST:
      genreId = action.payload.genreId;
      artistId = action.payload.artistId;

      //find index of artist to update in artistsByGenreId
      index = newState.artistsByGenreId[genreId].findIndex(
        (artist) => artist.id === parseInt(artistId)
      );
      //remove artist from artistsByGenreId array
      newState.artistsByGenreId[genreId].splice(index, 1);

      //remove artist from artistsByArtistId array
      delete newState.artistsByArtistId[artistId];

      index = newState.allArtists.findIndex(
        (artist) => artist.id === parseInt(artistId)
      );
      //remove artist from allArtists array
      newState.allArtists.splice(index, 1);

      return newState;

    default:
      return state;
  }
};

export default artistReducer;

//TEST THUNKS:

//RUN THESE TWO FIRST BEFORE TESTING UPDATE AND DELETE

//GET Artists and Get ONE Artists
// window.store.dispatch(window.artistActions.getAllArtistsThunk())
// window.store.dispatch(window.artistActions.getOneArtistThunk(1))

//ADD Artist
// window.store.dispatch(
//   window.artistActions.addNewArtistThunk({
//     name: 'NEWARTIST',
//     userId: 4,
//     genreId: 5,
//     location: 'everywhere',
//     artistUrl: 'hi',
//     description: 'YES',
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})
//UPDATE Artist
// window.store.dispatch(
//   window.artistActions.updateOneArtistThunk(3,{
//     name: 'new name',
//     userId: 4,
//     genreId: 17,
//     location: 'online',
//     artistUrl: 'NEWgorrila',
//     description: 'better than ever',
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})


// window.store.dispatch(
//   window.artistActions.updateOneArtistThunk(window.store.getState().artist.allArtists[2],{
//     name: 'new name',
//     userId: 4,
//     genreId: 18,
//     location: 'online',
//     artistUrl: 'NEWgorrila',
//     description: 'better than ever',
//   })
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})

//UPDATE ALBUM IMAGE
//will test with built out component

//DELETE Artist
// window.store.dispatch(window.artistActions
// .deleteOneArtistThunk(5, 1)
// ).catch(async (res) => { const resBody= await res.json(); console.log(res,resBody)})


// DELETE FAILS - model-cascade delte?
// artist is connected to user, need userId when adding artist
// WHERE IS NAME>
