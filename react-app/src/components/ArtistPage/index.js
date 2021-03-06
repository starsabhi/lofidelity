import React from 'react';
//prettier-ignore
import { useParams, Route, Switch, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlbumDetail from '../AlbumDetail';
import ArtistDetail from '../ArtistDetail';
import ArtistAlbums from '../ArtistAlbums';
import './ArtistPage.css';

import brokenRecord from '../../images/broken-record.jpg';

// import * as sessionActions from '../../store/session';
// import * as artistActions from '../../store/artist';

export default function ArtistPage() {
  // const sessionUser = useSelector((state) => state.session.user);
  // const userId = sessionUser.id
  // const dispatch = useDispatch();
  const location = useLocation();
  const albumId = location.pathname.split('albums/')[1];
  // console.log('ALBUMID', albumId);
  const { artistName } = useParams();
  // console.log(artistName);
  // const artist = useSelector((state) => state.session.sessionArtist);
  const artists = useSelector((state) => state.artist.allArtists);

  // console.log(artists);
  const [artist] = artists.filter((artist) => artist.artistUrl === artistName);
  // console.log(artist);

  const albums = useSelector((state) => state.album);

  // useEffect(() => {
  //   console.log('upload successful');
  // }, [artist]);
  // console.log('ALBUMS', albums[albumId]);

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

  // future work, for redirecting non-existent route
  // use effect that loads one artist into state, then have renderReady
  //  state that is only true once artist call as been made, then can check route

  const albumNotFound = (
    <div className='album-not-found'>
      <img
        className='album-detail-image'
        alt='album cover'
        // https://unsplash.com/photos/KjJuHQG02qU
        src={brokenRecord}
      />
      <h1>Album Not Found</h1>
    </div>
  );

  return (
    <>
      {/* {artist ? ( */}
      <div
        className='artist-bg-div'
        style={{ backgroundImage: `url(${artist?.bgImageUrl})` }}
      >
        {/* <img
          className='artist-background'
          alt='background'
          src={artist?.bgImageUrl}
        /> */}
        <div className='artist-content'>
          <div
            className='artist-cover-div'
            style={{ backgroundImage: `url(${artist?.coverImageUrl})` }}
          >
            {!artist && <h1>Artist Doesn't Exist</h1>}
            {/* <img
              className='artist-cover'
              alt='cover'
              src={artist?.coverImageUrl}
            /> */}
          </div>

          <div className='artist-row-two'>
            <ul className='artist-row-two-inner'>
              <li className='artist-music'>
                <NavLink
                  to={`/${artistName}`}
                  className='artist-inactive-link'
                  activeClassName={`artist-music-link-active`}
                >
                  <span>Music</span>
                </NavLink>
              </li>
              <li className='artist-merch'>
                <NavLink
                  to={`#`}
                  className='artist-inactive-link'
                  // activeClassName={`artist-music-link-active`}
                >
                  <span>Merch</span>
                </NavLink>
              </li>
              <li className='artist-community'>
                <NavLink
                  to={`#`}
                  className='artist-inactive-link'
                  // activeClassName={`profile-music-link-active`}
                >
                  <span>Community</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='artist-main-container'>
            <div className='artist-albums-list-container'>
              <Switch>
                <Route path='/:artistName' exact={true}>
                  <ArtistAlbums artist={artist} />
                </Route>
                <Route path='/:artistName/albums/:id(\d+)' exact={true}>
                  {albums[albumId] &&
                  albums[albumId]?.artistId === artist?.id ? (
                    <AlbumDetail artist={artist} />
                  ) : (
                    albumNotFound
                  )}
                </Route>
                <Route> {albumNotFound}</Route>
              </Switch>
            </div>
            <div className='artist-detail-container'>
              <div className='artist-detail-container-inner'>
                <ArtistDetail artist={artist} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
         <Redirect
          onLoad={alert("Artist doesn't exist, redirecting to Homepage.")}
          to={`/discover`}
        />
      )} */}
    </>
  );
}
