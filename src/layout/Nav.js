import React from 'react';
import './styles/Nav.scss';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function Nav() {
  return (
    <>
      <img className='nav_img' src={logo} alt='Text Sage Valley' />
      <ul className='nav_list'>
        <li>
          <NavLink to='/'>Start</NavLink>
        </li>

        <li>
          <NavLink to='bigCabin'>Big Cabin</NavLink>
        </li>
        <li>
          <NavLink to='littleCabin'>Little Cabin</NavLink>
        </li>
        <li>
          <NavLink to='attractions'>Attractions</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
