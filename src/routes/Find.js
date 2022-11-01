import React from 'react'
import '../styles/Find.scss';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FindMethod from '../components/FindMethod';

function Find() {
  return (
    <>
      <Header />
      <div className='title_bar'>
            <h1>Find</h1>
            <div className='left_item'><Link to='/'>Edit</Link></div>
            <div className='right_item'></div>
      </div>
      <main>
        <FindMethod />
        <section className='recommend_section'>
          <header><h2>Recommended Friends</h2></header>
          <ul>
            <li>You Have no Recommended friends.</li>
          </ul>
      </section>
      </main>
      <Navigation />
    </>
  )
}

export default Find