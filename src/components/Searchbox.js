import React from 'react'
import '../styles/Searchbox.scss';
import {FaSearch} from 'react-icons/fa';

function Searchbox() {
  return (
    <form className='search_box'>
      <fieldset className='search_inner'>
        <legend className='blind'>검색창</legend>
        <i><FaSearch /></i>
        <input type="search" name="search" id="search" 
        placeholder={"Find friends, chats, Plus Friends"} />
      </fieldset>
    </form>
  )
}

export default Searchbox