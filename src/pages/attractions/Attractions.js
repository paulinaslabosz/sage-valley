import React from 'react';
import Section from './Section';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Attractions.scss';
function Attractions() {
  return (
    <div className='atr_wrapper'>
      <ul className='atr_nav'>
        <NavLink
          to='/attractions/tub'
          className={({ isActive, isPending }) =>
            isPending
              ? 'atr_navlink'
              : isActive
              ? 'atr_navlink atr_active'
              : 'atr_navlink'
          }
        >
          HOT TUB
        </NavLink>
        <NavLink
          to='/attractions/sauna'
          className={({ isActive, isPending }) =>
            isPending
              ? 'atr_navlink'
              : isActive
              ? 'atr_navlink atr_active'
              : 'atr_navlink'
          }
        >
          SAUNA
        </NavLink>
        <NavLink
          to='/attractions/massage'
          className={({ isActive, isPending }) =>
            isPending
              ? 'atr_navlink'
              : isActive
              ? 'atr_navlink atr_active'
              : 'atr_navlink'
          }
        >
          MASSAGE
        </NavLink>
        <NavLink
          to='/attractions/food'
          className={({ isActive, isPending }) =>
            isPending
              ? 'atr_navlink'
              : isActive
              ? 'atr_navlink atr_active'
              : 'atr_navlink'
          }
        >
          FOOD
        </NavLink>
        <NavLink
          to='/attractions/green'
          className={({ isActive, isPending }) =>
            isPending
              ? 'atr_navlink'
              : isActive
              ? 'atr_navlink atr_active'
              : 'atr_navlink'
          }
        >
          GREEN
        </NavLink>
      </ul>
      <div className='atr_content'>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/:id' element={<Section />} />
        </Routes>
      </div>
    </div>
  );
}

export default Attractions;
