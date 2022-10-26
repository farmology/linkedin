import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
               <span className='sidebar__hash'>#</span>
               <p>{topic}</p>
        </div>   
    )
    
    return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Tomatoes-A118789228-1184x630.jpg' alt=''/>
            <Avatar src={user.photoUrl} className='sidebar__avatar'>
                {user.displayName[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    3,333
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">
                    9,999
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('software engineering')}
            {recentItem('programming')}
            {recentItem('nodejs')}
            {recentItem('firebase')}
        </div>
    </div>
  );
}

export default Sidebar