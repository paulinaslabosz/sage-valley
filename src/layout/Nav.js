import React from 'react';
import './styles/Nav.scss';
import logo from '../images/logo.png';
import Menu from './Menu';
import HamburgerMenu from './HamburgerMenu';

function Nav() {
  return (
    <>
      <img className='nav_img' src={logo} alt='Text Sage Valley' />
      <Menu />
      <HamburgerMenu />
    </>
  );
}

export default Nav;
