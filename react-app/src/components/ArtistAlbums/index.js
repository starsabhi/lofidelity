import './ArtistAlbums.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FullPageModal from '../FullPageModal';
import AlbumDeleteForm from '../DeleteForms';

export default function ArtistAlbums({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  //prettier-ignore
  const albums = useSelector((state) => state.album.albumsByArtistId[artist?.id]);

  const [showModal, setShowModal] = useState(false);
  const [albumId, setAlbumId] = useState(null);
  // const [deleted, setDeleted] = useState(false);
  // const updateDeleted = () => setDeleted(true);

  //showModal handlers
  const openModal = () => {
    if (showModal) return; // do nothing if modal already showing
    setShowModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeModal = () => {
    if (!showModal) return; // do nothing if modal already closed
    setShowModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  // if (deleted) {
  //   alert('Album successfully deleted, redirecting to artist page');
  //   return <Redirect to={`/${artistName}`} />;
  // }

  return (
    <>
      <FullPageModal showModal={showModal} closeModal={closeModal}>
        <AlbumDeleteForm
          artistId={sessionArtist?.id}
          albumId={albumId}
          // deleteRedirect={updateDeleted}
        />
      </FullPageModal>

      <div className='album-list-container-inner'>
        {albums?.map((album) => (
          <div className={`album-card-container`} key={album?.id}>
            <NavLink
              className={`album-navlink`}
              id={`album-${album?.id}`}
              exact
              to={`/${artist.artistUrl}/albums/${album?.id}`}
            >
              <img
                className='album-thumbnail-image'
                id={`album-${album?.id}-image`}
                alt='album-thumbnail'
                src={album?.imageUrl}
              />
            </NavLink>
            <a
              href={`/${artist.artistUrl}/albums/${album?.id}`}
              className='album-thumbnail-title'
            >
              {album?.title}
            </a>

            <div
              type='button'
              className={`album-delete-button
              ${sessionArtist?.id === album?.artistId ? '' : 'hidden'}
              `}
              onClick={() => {
                openModal();
                setAlbumId(album.id);
              }}
            >
              <span className='material-symbols-outlined'> delete</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
