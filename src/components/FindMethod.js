import React from 'react'
import '../styles/FindMethod.scss';
import {FaEnvelope,FaMobileAlt,FaQrcode,FaRegAddressBook} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function FindMethod() {
  return (
    <ul className='find_method'>
        <li><Link to='/find'><FaRegAddressBook className='icon' />Find</Link></li>
        <li><Link to='/find'><FaQrcode className='icon'/>QR Code</Link></li>
        <li><Link to='/find'><FaMobileAlt className='icon'/>Shake</Link></li>
        <li><Link to='/find'><FaEnvelope className='icon'/>Invite via SNS</Link></li>
    </ul>
  )
}

export default  FindMethod