import React from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
  return (
    <div className='ham'>
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
          <NavLink to='attractions/tub'>Attractions</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerManu;
