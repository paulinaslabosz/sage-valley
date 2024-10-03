import React from 'react';
import './styles/Cabins.scss';
import bigCabin from '../../../images/BigCabin.jpg';
import littleCabin from '../../../images/LittleCabin.jpg';

function Cabins() {
  return (
    <div className='cabins_wrapper'>
      <div className='cabins_cabin'>
        <img src={bigCabin} alt='Big cabin' />
        <div>
          <a href='#'>SEE MORE</a>
        </div>
      </div>
      <div className='cabins_cabin'>
        <img src={littleCabin} alt='Little cabin' />
        <div>
          <a href='#'>SEE MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Cabins;
