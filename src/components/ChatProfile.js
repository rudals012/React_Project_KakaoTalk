import React from 'react'
import '../styles/ChatProfile.scss';
import {Link} from 'react-router-dom';

function ChatProfile({name, img, talk, time, key}) {
  return (
    <div className='chatprofile'>
        <Link to='/chatting' state={{name, img, talk, time, key}}>
        <img src={img} className='chats_img empty'/>
        <span className='chats_cont'>
            <span className='chats_name'>{name}</span>
            <span className='chats_latest'>{talk.slice(0,40)}..</span>
        </span>
        <span className='chats_time'>{time}</span>
        </Link>
    </div>
  )
}

export default ChatProfile