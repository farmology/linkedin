import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        

        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input placeholder='Search' type="text" />

            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={ChatIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar='https://upload.wikimedia.org/wikipedia/commons/0/09/Blue_computer_icon.svg' title='Me' onClick={logoutofApp} />
        </div>
    </div>
  )
}

export default Header