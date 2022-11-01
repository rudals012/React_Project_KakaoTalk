import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Moreapp.scss';

function Moreapp() {
  return (
    <section className='more_app'>
        <h2 class="blind">앱 더보기</h2>
        <ul>
            <li><Link to='/more'><span className='app_icon'></span>Kakao Story</Link></li>
            <li><Link to='/more'><span className='app_icon'></span>Path</Link></li>
            <li><Link to='/more'><span className='app_icon'></span>Kakao friends</Link></li>
        </ul>
    </section>
  )
}

export default Moreapp