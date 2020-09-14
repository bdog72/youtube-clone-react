//
//

import React from 'react';
import '../styles/Header.css';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';

import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import { headerYouTubeLogo } from '../links';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src={headerYouTubeLogo}
          alt='YouTube Logo'
        />
      </div>

      <div className='header__input'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' />
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar className='header__avatar' alt='Bozo Boy' />
      </div>
    </div>
  );
}

export default Header;
