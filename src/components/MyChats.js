import React, { useEffect, useState } from 'react'
import {db, storage} from 'fbase';
import {doc, deleteDoc, updateDoc} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/MyChats.scss";

function MyChats({chatObj}) {

  const [nowDate, setNowDate] = useState(chatObj.createAt);

  useEffect( () => {
    let timeStamp = chatObj.createAt;
    const now = new Date(timeStamp);
    //console.log(now);
    setNowDate(now.toLocaleTimeString());
  },[])

  return (
    <div className='mychat'>
      <h4 className='chat'>{chatObj.text}</h4>
      {chatObj.attachmentUrl && (
        <img src={chatObj.attachmentUrl} width="50" height="50" alt='' />)}
      <span className='time'>{nowDate}</span>
    </div>
  )
}

export default MyChats