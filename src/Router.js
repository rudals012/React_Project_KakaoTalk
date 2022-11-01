import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './routes/Auth';
import Chats from './routes/Chats';
import Find from './routes/Find';
import Friends from './routes/Friends';
import More from './routes/More';
import Detail from './routes/Detail';
import Chatting from './routes/Chatting';

function AppRouter({isLoggedIn, userObj}) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
       {isLoggedIn ? (
            <Route path='/' element={<Friends userObj={userObj}/>} />
            ) : (
            <Route path='/' element={<Auth />} />
        )}
        {/* <Route path='/' element={<Friends />} /> */}
        <Route path='/chats' element={<Chats />} />
        <Route path='/find' element={<Find />} />
        <Route path='/more' element={<More userObj={userObj}/>} />
        <Route path='/detail' element={<Detail userObj={userObj}/>} />
        <Route path='/chatting' element={<Chatting userObj={userObj}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter