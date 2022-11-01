import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Pluslist.scss';
import {FaUtensils,FaHouseUser,FaTv,FaPenFancy,FaGraduationCap,FaUniversity,FaWonSign,FaVideo} from 'react-icons/fa';

function Pluslist() {
  return (
    <ul className='plus_list'>
        <li><Link to="/more"><FaUtensils className='icon'/>Order</Link></li>
        <li><Link to="/more"><FaHouseUser className='icon'/>Store</Link></li>
        <li><Link to="/more"><FaTv className='icon'/>TV Channel/Radio</Link></li>
        <li><Link to="/more"><FaPenFancy className='icon'/>Creation</Link></li>
        <li><Link to="/more"><FaGraduationCap className='icon'/>Education</Link></li>
        <li><Link to="/more"><FaUniversity className='icon'/>Politics/Society</Link></li>
        <li><Link to="/more"><FaWonSign className='icon'/>Finance</Link></li>
        <li><Link to="/more"><FaVideo className='icon'/>Movies/Music</Link></li>
    </ul>
  )
}

export default Pluslist