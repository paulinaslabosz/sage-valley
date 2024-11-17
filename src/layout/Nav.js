import React from 'react';
import './styles/Nav.scss';
import logo from '../images/logo.png';
import Menu from './Menu';

function Nav() {
  return (
    <>
      <img className='nav_img' src={logo} alt='Text Sage Valley' />
      <Menu />
    </>
  );
}

export default Nav;
