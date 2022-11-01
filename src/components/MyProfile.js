import React from 'react'
import '../styles/MyProfile.scss';
import {Link} from 'react-router-dom'

function MyProfile({name, email, img, key, bg}) {

  return (
    <div className='myprofile'>
      <Link to='/detail' state={{name, email, img, key, bg}}>
      <img src={img} className='profile_img empty'/>
      <h2 className='profile_name'>{name}</h2>
      </Link>
    </div>
  )
}

export default MyProfile
