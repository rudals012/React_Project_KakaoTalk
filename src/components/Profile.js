import React from 'react'
import '../styles/Profile.scss';
import {Link} from 'react-router-dom';


function Profile({name, email, img, key, bg}) {

  return (
    <div className='profile'>
      <Link to='/detail' state={{name, email, img, key, bg}}>
      <img src={img} alt={key} className='profile_img empty' />
      <h2 className='profile_name'>{name}</h2>
      <span className='profile_messages'>{email.slice(0,50)}</span>
      </Link>
    </div>
  )
}

export default Profile
