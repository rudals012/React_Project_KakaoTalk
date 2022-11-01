import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Chats.scss';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import {FaCog} from 'react-icons/fa';
import people from '../data/people.json';
import Navigation from '../components/Navigation';
import ChatProfile from '../components/ChatProfile';
import {FaComment} from 'react-icons/fa';

function Chats() {
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
            <h1>Chats<span>1</span></h1>
            <div className='left_item'><Link to='/'>Edit</Link></div>
            <div className='right_item'><FaCog /></div>
      </div>
      <Searchbox />
      <main>
        <section className='main_section'>
          <header className='blind'><h2>Friends</h2></header>
          <ul>
             {people.map((profile, index) => (
              <li>
                <ChatProfile
                  key={profile.id}
                  img={profile.img}
                  name={profile.username}
                  talk={profile.text}
                  time={profile.time}
                />
              </li>
             ))}
          </ul>
        </section>
        <div className='chat_fa_btn'>
          <Link to="/chats">
            <FaComment />
          </Link>
        </div>
      </main>
      <Navigation/>
    </>
  )
}

export default Chats