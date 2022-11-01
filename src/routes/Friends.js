import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Friends.scss';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import Profile from '../components/Profile';
import Navigation from '../components/Navigation';
import {FaCog} from 'react-icons/fa';
import people from '../data/people.json';
import MyProfile from '../components/MyProfile';


function Friends() {

    const [profiles, setProfiles] = useState([]);

    const getProfiles = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  
      setProfiles(data);
    };
    useEffect(() => {
      getProfiles();
    }, []);
  

  return (
    <>
      <Header />
      <div className='title_bar'>
            <h1>Friends<span>1</span></h1>
            <div className='left_item'><Link to='/'>Manage</Link></div>
            <div className='right_item'><FaCog /></div>
      </div>
      <Searchbox />
      <main>
        <section className='main_section'>
            <header><h2>My Profile</h2></header>
            <ul>
                {people.map((profile, index) => (
                    <li>
                        <MyProfile 
                           key={profile.id}
                           img={profile.img}
                           name={profile.username}
                           email={profile.email}
                           bg={profile.bg}
                        />
                    </li>
                )).slice([0],[1])}
            </ul>
        </section>
        <section className='main_section'>
            <header><h2>Friends</h2></header>
            <ul>
                {people.map((profile, index) => (
                    <li>
                        <Profile 
                        key={profile.id}
                        img={profile.img}
                        name={profile.username}
                        email={profile.email}
                        bg={profile.bg}
                        />
                    </li>
                ))}
            </ul>
        </section>
      </main>
      <Navigation/>
    </>
    )
  
}

export default Friends