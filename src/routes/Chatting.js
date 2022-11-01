import React, { useEffect, useState } from 'react';
import '../styles/Chatting.scss';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import MyChats from 'components/MyChats';
import ChatFactory from 'components/ChatFactory';
import {db, storage} from "../fbase";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import {FaAngleLeft,FaSearch,FaBars} from 'react-icons/fa';

function Chatting({userObj}) {
  const location = useLocation();
  console.log(location);
  
  const navigate = useNavigate();
  if(location.state === undefined){
    navigate('/');
  }

  const {key,img,name,talk,time} = location.state;

  console.log(userObj);
  const [mychats, setMychats] = useState([]); 

  useEffect(()=>{  //실시간 데이터베이스 문서들 가져오기
    const q = query(collection(db, "tweets"),
              orderBy("createAt","asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({...doc.data(), id:doc.id});
      });
      // console.log(newArray);
      setMychats(newArray);
    });
  },[]);
  
  return (
    <div className='chatting'>
      <Header />
      <div  className='title_bar'>
        <h1>{name}</h1>
        <div className='left_item'>
          <Link to='/chats'>
            <FaAngleLeft className='icon' />
          </Link>
        </div>
        <div className='right_item'>
          <Link to='/chats'>
            <FaSearch className='icon'/>
            <FaBars className='icon'/>
          </Link>
        </div>
      </div>
      <main>
        <span className='date_info'>Monday,October 17, 2022</span>
        <div className='chat_box my'>
          <span className='chat'>Hello!</span>
          <span className='chat'>Hello! This is a test message.</span>
          <span className='chat'>This is a test message.</span>
          <span className='chat_time'><span>1</span>:<span>30</span></span>
        </div>
        <div className='chat_box other'>
          <div className='other_info'>
              <Link to='/chats'><img src={img} alt={key} className='profile_img empty'/></Link>
              <span class="profile_name">{name}</span>
          </div>
          <span class="chat">And this is an answer</span>
          <span class="chat">And this is an answer And this is an answer</span>
          <span class="chat">And this is an answer</span>
          <span class="chat_time">{time}</span>
        </div>
        <div className='chat_box my new'>
          {mychats.map(mychat => (
            <MyChats 
            key={mychat.id}
            chatObj={mychat}
            isOwner={mychat.createId === userObj.uid}
            />
          ))}
        </div>
    </main>
    <footer>
      <ChatFactory userObj={userObj} />
    </footer>
    </div>
  )
}

export default Chatting
