import React from 'react'
import '../styles/Navigation.scss';
import {NavLink} from 'react-router-dom';
import {FaUser, FaComment, FaSearch, FaEllipsisH} from 'react-icons/fa';

function Navigation() {
  return (
    <nav className='tab_bar'>
      <ul>
        <li>
          <NavLink end to='/' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaUser className='tab_bar_icon' />
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink to='/chats' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaComment className='tab_bar_icon' />
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink to='/find' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaSearch className='tab_bar_icon' />
            Find
          </NavLink>
        </li>
        <li>
          <NavLink to='/more' className={({ isActive }) => 'tab_bar_link ' + (isActive ? 'active' : '')}>
            <FaEllipsisH className='tab_bar_icon' />
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
