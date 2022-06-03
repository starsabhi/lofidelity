import './SignUpChoice.css';

import React from 'react';
import { Link } from 'react-router-dom';

import fanIcon from '../../images/fan-signup.png';
import artistIcon from '../../images/artist-signup.png';

export default function SignUpChoice({ closeModal }) {
  return (
    <div className='signup-modal-container'>
      <div className='signup-modal-top'>
        <div>Sign up for a Lofidelity account</div>
      </div>
      <div className='signup-modal-bottom'>
        <div className='signup-modal-fan-container'>
          <div className='signup-modal-fan-left'>
            <img
              src={fanIcon}
              alt='fan icon'
              className='signup-modal-fan-icon'
            ></img>
          </div>
          <div className='signup-modal-fan-right'>
            <Link
              to='/sign-up/fan'
              className='signup-modal-fan-link'
              onClick={closeModal}
            >
              <div>Sign up as a fan</div>
            </Link>
            <div className='signup-modal-fan-text'>
              <div>
                Checkout your favorite lofi artists, stream their music, and
                explore the music of the lofidelity community.
              </div>
            </div>
          </div>
        </div>

        <div className='signup-modal-artist-container'>
          <div className='signup-modal-artist-left'>
            <img
              src={artistIcon}
              alt='artist icon'
              className='signup-modal-artist-icon'
            ></img>
          </div>
          <div className='signup-modal-artist-right'>
            <Link
              to='/sign-up/artist'
              className='signup-modal-artist-link'
              onClick={closeModal}
            >
              <div>Sign up as an artist</div>
            </Link>
            <div className='signup-modal-artist-text'>
              <div>
                Sell directly to your fans with total control over your music
                and pricing. Easy access to your customers' data, real-time
                stats, music chat reporting, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
