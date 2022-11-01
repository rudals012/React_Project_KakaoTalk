import React, { useState, useEffect } from 'react';
import App from '../App';
import {authService} from '../fbase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import AuthForm from '../components/AuthForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Auth.scss";


function Auth() {

  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
      setInit(true);
      });
    }, []); 

    const onSocialClick = (e) => {
      // console.log(e.target.name);
      const {target:{name}} = e;
      let provider;
      if(name === "google"){
          provider = new GoogleAuthProvider();
      }
      // const는 값이 바뀌면 안되는 절대값이라 let를 사용해야함
      const data = signInWithPopup(authService, provider);
      // console.log(data);
  
    }

  return (
    <div className='authContainer'>
      <div className='logo'>
        <img alt="파일:KakaoTalk logo.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/600px-KakaoTalk_logo.svg.png" decoding="async" width="120" height="120" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/900px-KakaoTalk_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/1200px-KakaoTalk_logo.svg.png 2x" data-file-width="500" data-file-height="500"/>
      </div>
        <AuthForm />
        <div className='authBtns'>
            <button onClick={onSocialClick} name="google" className='authBtn'>
              Continue with Goggle<FontAwesomeIcon icon="fa-brands fa-google" />
            </button>
        </div>
    </div>
  )
}

export default Auth