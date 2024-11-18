import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/HamburgerMenu.scss';
function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);
  return (
    <>
      <FontAwesomeIcon icon={faBars} onClick={() => handleMenu()} />
      <ul className={isMenuOpen ? 'ham_list' : 'ham_list-hide'} ref={ref}>
        <li className='ham_list-el'>
          <NavLink to='/'>Start</NavLink>
        </li>

        <li className='ham_list-el'>
          <NavLink to='bigCabin'>Big Cabin</NavLink>
        </li>
        <li className='ham_list-el'>
          <NavLink to='littleCabin'>Little Cabin</NavLink>
        </li>
        <li className='ham_list-el'>
          <NavLink to='attractions/tub'>Attractions</NavLink>
        </li>
        <li className='ham_list-el'>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default HamburgerMenu;
