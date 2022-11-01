import React from 'react'
import { Link } from 'react-router-dom'
import {FaRegSmile,FaPaintBrush,FaRegHandPeace,FaRegUserCircle} from 'react-icons/fa';
import '../styles/Usermenu.scss';

function Usermenu() {
  return (
    <section className='user_menu'>
        <h2 class="blind">사용자 메뉴</h2>
        <ul>
            <li><Link to='/more'><FaRegSmile className='icon'/>Emotions</Link></li>
            <li><Link to='/more'><FaPaintBrush className='icon'/>Themes</Link></li>
            <li><Link to='/more'><FaRegHandPeace className='icon'/>Plus Friends</Link></li>
            <li><Link to='/more'><FaRegUserCircle className='icon'/>Account</Link></li>
        </ul>
    </section>
  )
}

export default Usermenu
