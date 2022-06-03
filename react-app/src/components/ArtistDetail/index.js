import React from 'react';
import './ArtistDetail.css';

function ArtistDetail({ artist }) {
  const genreList = {
    1: 'acoustic',
    2: 'alternative',
    3: 'ambient',
    4: 'blues',
    5: 'classical',
    6: 'country',
    7: 'electronic',
    8: 'experimental',
    9: 'folk',
    10: 'funk',
    11: 'hiphop_rap',
    12: 'jazz',
    13: 'metal',
    14: 'pop',
    15: 'punk',
    16: 'soul',
    17: 'reggae',
    18: 'rock'
  }
  return (
    <div className='artist-detail-container'>
      <img
        className='artist-profile'
        alt='profile'
        src={artist?.profileImageUrl}
      />
      <span className='artist-name'>{artist?.name}</span>
      <span className='artist-genre'>{genreList[artist?.genreId]}</span>
      <span className='artist-location'>{artist?.location}</span>
      <p>{artist?.description}</p>
    </div>
  );
}

export default ArtistDetail;
