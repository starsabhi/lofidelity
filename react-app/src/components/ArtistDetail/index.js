import React from 'react';
import './ArtistDetail.css';

function ArtistDetail({ artist }) {
  return (
    <div className='artist-detail-container'>
      <img
        className='artist-profile'
        alt='profile'
        src={artist?.profileImageUrl}
      />
      <span className='artist-name'>{artist?.name}</span>
      <span className='artist-genre'>{artist?.genreId}</span>
      <span className='artist-location'>{artist?.location}</span>
      <p>{artist?.description}</p>
    </div>
  );
}

export default ArtistDetail;
