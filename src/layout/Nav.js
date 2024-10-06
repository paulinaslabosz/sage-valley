import React from 'react';
import './styles/Nav.scss';
import logo from '../images/logo.png';

function Nav() {
  return (
    <>
      <img className='nav_img' src={logo} alt='Text Sage Valley' />
      <ul className='nav_list'>
        <li>Start</li>
        <li>Big Cabin</li>
        <li>Little Cabin</li>
        <li>Attractions</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Nav;
