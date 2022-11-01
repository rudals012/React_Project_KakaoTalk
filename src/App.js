import React,{useState, useEffect} from "react";
import AppRouter from "./Router";
import {authService} from './fbase';
import { onAuthStateChanged } from "firebase/auth";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter,faGoogle, faGithub);

function App() {

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {  //firebase에서 사용자 정보를 받는 그 시점에 실행됨
    onAuthStateChanged(authService, (user) => {
      // console.log(user);
      if (user) {
        //  User is signed in
        setIsLoggedIn(user);
        setUserObj(user);
        // const uid = user.uid;

      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
      setInit(true);
    });  
  },[])

  return (
    <>
    {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "initializing..."}
    </>
  );
}

export default App;
