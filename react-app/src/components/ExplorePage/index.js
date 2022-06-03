import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ExplorePage.css';

const ExplorePage = () => {
  const firstList = useSelector((state) => Object.values(state));
  // console.log(firstList[1].allArtists, 'What I am getting from store');
  const allArtists = firstList[1].allArtists;

  return (
    <div className='outerDivdorArtistList'>
      <h1 className='titleOfDivContentforArtist'>Discover</h1>
      <div className='artistListDiv'>
        {allArtists?.map((artist) => {
          return (
            <div className='listofArtistDiv' key={artist.id}>
              <div className='listofArtist'>
                <Link to={`/${artist.artistUrl}`}>
                  <img
                    className='artistCoverImg'
                    src={artist.profileImageUrl}
                    alt='artistBackgorundimage'
                  ></img>
                </Link>
                <div className='artistNameInnerDiv' id='artistNameInnerId'>
                  {artist.name}
                </div>
                <p className='artistdescriptionInnerDiv'>
                  {artist.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
