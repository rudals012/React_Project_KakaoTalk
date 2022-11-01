import React from 'react'
import '../styles/Header.scss';
import {FaPlane, FaWifi, FaRegMoon, FaBluetoothB, FaBatteryFull} from 'react-icons/fa';

function Header() {
  return (
    <header className='status'>
        <div className='status_bar'>
            <div className='left_item'>
                <FaPlane />
                <FaWifi />
            </div>
            <div className='center_item'>
                <span>15</span>:<span>33</span>
            </div>
            <div className='right_item'>
                <FaRegMoon />
                <FaBluetoothB />
                <span>100%</span>
                <FaBatteryFull />
            </div>
        </div>
    </header>
  )
}

export default Header
