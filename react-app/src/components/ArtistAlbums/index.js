import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ArtistAlbums.css'
function ArtistAlbums({ artist }) {
  const albums = useSelector(
    (state) => state.album.albumsByArtistId[artist.id]
  );
  return (
    <div className='album-thumbnail-container'>
      {albums?.map((album) => (
        <NavLink
          className={`album-navlink`}
          id={`album-${album.id}`}
          exact
          to={`/${artist.artistUrl}/albums/${album.id}`}
        >
          <img
            className='album-thumbnail-image'
            id={`album-${album.id}-image`}
            alt='album-thumbnail'
            src={album.imageUrl}
          />
          <span className='album-thumbnail-title'>{album.title}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default ArtistAlbums;
