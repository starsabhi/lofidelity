import './NavBar.css';

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import FullPageModal from '../FullPageModal';
import SignUpChoice from '../SignUpChoice';

import Navlogo from '../../images/NewNavLogo.png';
import searchIcon from '../../images/icons/search-icon.svg';
import notificationsIcon from '../../images/icons/notification-icon.svg';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  //showModal handlers
  const openModal = () => {
    if (showModal) return; // do nothing if modal already showing
    setShowModal(true);
    //disable page scrolling:
    document.getElementById('root').classList.add('overflow');
  };

  const closeModal = () => {
    if (!showModal) return; // do nothing if modal already closed
    setShowModal(false);
    //enable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  let sessionLinks;
  //is user, show profile button/menu, else show login/signup links
  if (sessionUser) {
    sessionLinks = (
      <>
        <li className='main-nav-notification-container'>
          <img
            className='main-nav-upload-icon'
            src={notificationsIcon}
            alt='notifications'
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid meet'
          />
        </li>

        <li className='main-nav-userMenu'>
          <ProfileButton user={sessionUser} />
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <FullPageModal showModal={showModal} closeModal={closeModal}>
          <SignUpChoice />
        </FullPageModal>

        <li className='main-nav-signup'>
          <Link to='#' className='main-nav-signup-link' onClick={openModal}>
            <div>sign up</div>
          </Link>
        </li>

        <li className='main-nav-login'>
          <Link to='/login' className='main-nav-login-link'>
            log in
          </Link>
        </li>
      </>
    );
  }

  return (
    <nav className='main-nav'>
      <div className='main-nav-inner'>
        <div className='main-nav-left'>
          <NavLink exact to='/' className='main-nav-link'>
            <img
              className='main-nav-logo'
              src={Navlogo}
              alt='logo'
              viewBox='0 0 100 100'
              preserveAspectRatio='xMidYMid meet'
            />
          </NavLink>

          <div className='main-nav-discover'>
            <Link to='/discover' className='main-nav-discover-link'>
              Discover
            </Link>
          </div>

          <Link to='/discover' className='main-nav-search'>
            <input
              id='search'
              className='main-nav-search-input'
              type='text'
              name='search'
              placeholder='Search for artist, album, or track'
              disabled
              value={query ?? ''}
              onChange={(e) => setQuery(e.target.value)}
            />
            <img
              className='main-nav-search-icon'
              src={searchIcon}
              alt='search'
              viewBox='0 0 100 100'
              preserveAspectRatio='xMidYMid meet'
            />
          </Link>
        </div>

        <div className='main-nav-right'>
          <ul className='main-nav-right-list'>{sessionLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
