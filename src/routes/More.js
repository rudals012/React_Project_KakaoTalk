import React from 'react'
import '../styles/More.scss';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {FaCog,FaInfoCircle} from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Usermenu from '../components/Usermenu';
import Pluslist from '../components/Pluslist';
import Moreapp from '../components/Moreapp';
import people from '../data/people.json';
import MoreProfile from '../components/MoreProfile';

function More() {
  return (
    <>
      <Header />
      <div className='title_bar'>
        <h1>More</h1>
          <div className='left_item'><Link to='/more'>Edit</Link></div>
          <div className='right_item'><FaCog /></div>
      </div>
      <main>
      <section className='user_info'>
        <h2 class="blind">사용자 정보</h2>
        <ul>
            {people.map((profile, index) => (
                <li>
                    <MoreProfile 
                        key={profile.id}
                        img={profile.img}
                        name={profile.username}
                        email={profile.email}
                    />
                </li>
            )).slice([0],[1])}
        </ul>
      </section>
      <Usermenu />
      <section className='plus_friends'>
        <header>
          <h2>Plus Friends</h2>
          <span><FaInfoCircle />Learn More</span>
        </header>
        <Pluslist />
      </section>
      <Moreapp />
      </main>
      <Navigation />
    </>
  )
}

export default More
