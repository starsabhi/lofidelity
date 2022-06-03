import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AlbumDetail from '../AlbumDetail';
import ArtistDetail from '../ArtistDetail';
import ArtistAlbums from '../ArtistAlbums';
import './ArtistPage.css';
import * as sessionActions from '../../store/session';
import * as artistActions from '../../store/artist';

export default function ArtistPage({ detail }) {
  // const sessionUser = useSelector((state) => state.session.user);
  // const userId = sessionUser.id
  // const dispatch = useDispatch();
  const { artistName } = useParams();
  // console.log(artistName);
  // const artist = useSelector((state) => state.session.sessionArtist);
  const artists = useSelector((state) => state.artist.allArtists);
  // console.log(artists);
  const [artist] = artists.filter((artist) => artist.artistUrl === artistName);
  // console.log(artist);
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
        src={artist?.bgImageUrl}
      />
      <div className='artist-content'>
        <div className='cover-div'>
          <img
            className='artist-cover'
            alt='cover'
            src={artist?.coverImageUrl}
          />
        </div>
        <div className='inner-nav-div'>
          <p>NAV</p>
        </div>
        <div className='artist-body-div'>
          <div className='albums-container'>
            {detail ? (
              <AlbumDetail artist={artist} />
            ) : (
              <ArtistAlbums artist={artist} />
            )}
          </div>
          <div className='artist-detail-container'>
            <ArtistDetail artist={artist} />
          </div>
        </div>
      </div>
    </div>
  );
}
