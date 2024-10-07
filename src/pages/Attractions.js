import React from 'react';
import './Attractions.scss';
function Attractions() {
  return (
    <div className='atr_wrapper'>
      <ul className='atr_nav'>
        <li className='atr_navlink'>BATHHOUSE</li>
        <li className='atr_navlink'>SAUNA</li>
        <li className='atr_navlink'>MASSAGE</li>
        <li className='atr_navlink'>FOOD</li>
        <li className='atr_navlink'>GREEN</li>
      </ul>
      <div className='atr_content'>Tu treść</div>
    </div>
  );
}

export default Attractions;
