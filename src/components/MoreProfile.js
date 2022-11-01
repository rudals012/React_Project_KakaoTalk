import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db, authService, storage } from 'fbase';
import '../styles/MoreProfile.scss';

function MoreProfile({name, email, img, key}) {

  const navigate = useNavigate();

   /* 로그아웃 기능 */
   const onLogOutClick = () => {
    authService.signOut();
    navigate('/'); // 홈으로 이동 (다이렉트 기능)
    window.location.reload();
  };

  return (
    <div className='more_profile'>
        <img src={img} alt={name} className='profile_img empty'/>
        <span className='profile_info'>
            <span className='profile_name'>{name}</span>
            <span className='profile_email'>{email}</span>
        </span>
        <span className='cancelBtn logOut' onClick={onLogOutClick}>
          Log Out
        </span>
    </div>
  )
}

export default MoreProfile
