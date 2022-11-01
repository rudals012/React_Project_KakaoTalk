import React from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Detail.scss';
import Header from '../components/Header';
import {FaTimes,FaUserAlt,FaComment,FaPencilAlt} from 'react-icons/fa';
 
function Detail() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  if(location.state === undefined){
    navigate('/');
  }

  const {name, email, bg, key, img} = location.state;

  return (
    <>
    <Header />
    <div className='title_bar'>
      <h1 className='blind'>Profile</h1>
      <div className='left_item'>
        <Link to='/'>
          <FaTimes />
        </Link>
      </div>
      <div className='right_item'>
        <Link to='/detail'>
          <FaUserAlt />
        </Link>
      </div>
    </div>
    <main>
      <section className='background'>
        <h2 className='blind'>My profile background image</h2>
        <div style={{
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '500px'
        }}></div>

      </section>
        <img className='detail_img' src={img} alt={key} />
        <div className='profile_cont'>
          <span className='profile_name'>{name}</span>
          <input type="mail" placeholder={email} />
          <ul className='profile_menu'>
            <li>
              <Link to='/detail'>
                <span>
                  <FaComment className='icon'/>
                </span>
                My Chatroom
              </Link>
            </li>
            <li>
              <Link to='/detail'>
                <span>
                  <FaPencilAlt className='icon'/>
                </span>
                Edit Profile
              </Link>
            </li>
          </ul>
        </div>
    </main>
    </>
  )
}

export default Detail
