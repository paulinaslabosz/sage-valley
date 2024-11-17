import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/HamburgerMenu.scss';
function HamburgerMenu() {
  return (
    <>
      <FontAwesomeIcon icon={faBars} />
      <ul className='ham_list'>
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
          <NavLink to='attractions/tub'>Attractions</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default HamburgerMenu;
