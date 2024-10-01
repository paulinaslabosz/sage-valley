import React from 'react';
import logo from '../images/logo.png';

function Nav() {
  return (
    <>
      <div>
        <img src={logo} alt='Text Sage Valley' />
      </div>
      <ul>
        <li>Start</li>
        <li>Big Cabin</li>
        <li>Little Cabin</li>
        <li>Attraction</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Nav;
