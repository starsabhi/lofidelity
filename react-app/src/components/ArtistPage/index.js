import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AlbumDetail from '../AlbumDetail';
import ArtistDetail from '../ArtistDetail';
import ArtistAlbums from '../ArtistAlbums';
import './ArtistPage.css';
import * as sessionActions from '../../store/session';
import * as artistActions from '../../store/artist';

function ArtistPage({detail}) {
  // const sessionUser = useSelector((state) => state.session.user);
  // const userId = sessionUser.id
  // const dispatch = useDispatch();
  const { artistName }  = useParams();
  console.log(artistName)
  // const artist = useSelector((state) => state.session.sessionArtist);
  const artists = useSelector((state) => state.artist.allArtists);
  console.log(artists)
  const [artist] = artists.filter(artist=>artist.artistUrl === artistName)
  console.log(artist)
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(artistActions.getSessionArtistThunk(userId)).catch(
  //       (res) => console.log(res)
  //     );
  //     setIsArtistLoaded(true)
  //   })();
  // }, [dispatch, userId]);
  // const params = useParams();
  // const artistId = params.id;

  // if (!isArtistLoaded) {
  //   return null;
  // }

  return (
    <div className='bg-div'>
      <img
        className='artist-background'
        alt='background'
        src={artist.bgImageUrl}
      />
      <div className='artist-content'>
        <div className='cover-div'>
          <img
            className='artist-cover'
            alt='cover'
            src={artist.coverImageUrl}
          />
        </div>
        <div className='inner-nav-div'>
          <p>NAV</p>
        </div>
        <div className='artist-body-div'>
          <div className='albums-container'>
            {detail ? (<AlbumDetail artist={artist}/>) : (<ArtistAlbums artist={artist}/>)}

          </div>
          <div className='artist-detail-container'>
            <ArtistDetail artist={artist}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;

/*
import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Song = ({ song, onChange }) => {
  return (
    <input
      type='text'
      value={song.title}
      onChange={(e) => {
        onChange({ title: e.value });
      }}
    />

  );
};

const EditAlbum = () => {
  const params = useParams();
  const id = params.id;
  const [image, setImage] = useState(null); // null could be default image url
  const [album, setAlbum] = useState({
    id: 1,
    artistId: 1,
    title: 'HifiReality',
    releaseYear: 2012,
    about: 'This is a lofi album about the high points of life.',
    imageUrl: '',  //this will all come from state
    price: 12,
    songs: [{id: 1, albumId: 1, title: 'Forest Lullaby', trackNumber: 1, audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/05/audio_1395e7800f.mp3?filename=forest-lullaby-110624.mp3'}],

  });

  useEffect(() => {
    async function main() {
      const response = await fetch(`/api/album/1`); //${id} once state exists
      const data = await response.json();
      setAlbum(data);
    }
    main();
  }, [id]);

  function updateAlbum(updates) {
    setAlbum({ ...album, ...updates });
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', album.title);
    formData.append('artistId', album.artistId);
    formData.append('releaseYear', album.releaseYear);
    formData.append('about', album.about);
    formData.append('price', album.price);
    formData.append('image', image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    // setImageLoading(true);
    const res = await fetch(`/api/album/1`, { //${id} once state exists
      method: 'PATCH',
      body: formData,
    });
    if (res.ok) {
      await res.json();
      // setImageLoading(false);
      // history.push("/");
    } else {
      // setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log('error');
    }
  };

  if (Object.keys(album).length === 0) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title </label>
      <input
        type='text'
        value={album.title}
        onChange={(e) => updateAlbum({ title: e.target.value })}
      />
      <label>Release Year </label>
      <input
        type='text'
        value={album.releaseYear}
        onChange={(e) => updateAlbum({ releaseYear: e.target.value })}
      />
      <label>about </label>
      <input
        type='text'
        value={album.about}
        onChange={(e) => updateAlbum({ about: e.target.value })}
      />
      <img src={album.imageUrl} />
      <label>Upload Album Image </label>
      <input type='file' accept='image/*' onChange={updateImage} />
      <br></br>
      <p>Songs</p>
      {album.songs?.map((song, i) => {
        return (
          <Song
            song={song}
            onChange={(updates) => {
              const newSongs = [
                ...album.songs.slice(0, i),
                { ...album.songs[i], ...updates },
                ...album.songs.slice(i + 1),
              ];
              setAlbum({
                ...album,
                songs: newSongs,
              });
            }}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditAlbum;
*/
