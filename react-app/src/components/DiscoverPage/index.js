import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import './DiscoverPage.css';

export default function DiscoverPage() {
  const firstList = useSelector((state) => Object.values(state));
  // console.log(firstList[1].allArtists, 'What I am getting from store');
  const allArtists = firstList[1].allArtists;

  return (
    <>
      <div
        className='discover-cover-div'
        style={{ backgroundImage: `url(#)` }}
      ></div>

      <div className='discover-row-two'>
        <ul className='discover-row-two-inner'>
          <li className='discover-music'>
            <NavLink
              to={`/discover`}
              className='discover-inactive-link'
              activeClassName={`discover-music-link-active`}
            >
              <span>Discover</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='discover-main-container'>
        {/* <h1 className='discover-heading'>Discover</h1> */}

        <div className='discover-artist-card-container'>
          {allArtists?.map((artist) => {
            return (
              <div className='discover-artist-card' key={artist.id}>
                <div className='discover-artist-card-inner'>
                  <Link to={`/${artist.artistUrl}`}>
                    <img
                      className='discover-artistCoverImg'
                      src={artist.profileImageUrl}
                      alt='coverImage'
                    ></img>
                  </Link>
                  <div className='discovera-artist-card-bottom'>
                    <div className='discover-artistName' id='artistNameInnerId'>
                      <div>{artist.name}</div>
                    </div>
                    <div className='discover-artistdescription'>
                      <div>{artist.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}