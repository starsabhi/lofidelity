import './NavBar.css';

import React, { useEffect, useState } from 'react';
import { NavLink, Link, Route, Switch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import bandCampLogo from '../../images/bandcamp.svg';
import searchIcon from '../../images/icons/search-icon.svg';
import notificationsIcon from '../../images/icons/notification-icon.svg';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const [query, setQuery] = useState('');

  let sessionLinks;
  //is user, show profile button/menu, else show login/signup links
  if (sessionUser) {
    sessionLinks = (
      <>
        <li className='main-nav-notification-container'>
          <img
            className='main-nav-upload-icon'
            src={notificationsIcon}
            alt='logo'
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
        <li className='main-nav-signup'>
          <Link to='/sign-up'>
            <div>sign up</div>
          </Link>
        </li>

        <li className='main-nav-login'>
          <Link to='/login'>log in</Link>
        </li>
      </>
    );
  }

  return (
    <nav className='main-nav'>
      <div className='main-nav-left'>
        <NavLink exact to='/' className='main-nav-link'>
          <img
            className='main-nav-logo'
            src={bandCampLogo}
            alt='logo'
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid meet'
          />
        </NavLink>

        <Link to='/explore' className='main-nav-search'>
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
    </nav>
  );
};

export default NavBar;
