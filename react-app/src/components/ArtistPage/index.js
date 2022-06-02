import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AlbumDetail from './AlbumDetail';
import ArtistDetail from './ArtistDetail';
import ArtistAlbums from './ArtistAlbums';
import './ArtistPage.css';
import * as sessionActions from '../../store/session';
import * as artistActions from '../../store/artist';

function ArtistPage() {
  <div className='bg-div'>
    <div className='cover-div'></div>
    <div className='inner-nav-div'></div>
    <div className='artist-body-div'>
      <div className='albums-container'>
        <Switch>
          <Route path='/:artistUrl' exact>
            <ArtistAlbums />
          </Route>
          <Route path='/:artistUrl/albums/:id'>
            <AlbumDetail />
          </Route>
        </Switch>
      </div>
      <div className='artist-detail-container'>
        <ArtistDetail />
      </div>
    </div>
  </div>;
}

export default ArtistPage;
