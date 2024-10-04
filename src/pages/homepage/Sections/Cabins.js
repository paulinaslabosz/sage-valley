import React from 'react';
import './styles/Cabins.scss';
import bigCabin from '../../../images/BigCabin.jpg';
import littleCabin from '../../../images/LittleCabin.jpg';

function Cabins() {
  return (
    <div className='cabins_wrapper'>
      <h1>Cabins</h1>
      <div className='cabins_content'>
        <div className='cabins_cabin'>
          <img src={bigCabin} alt='Big cabin' />
          <div>
            <a href='#'>Big cabin</a>
          </div>
        </div>
        <div className='cabins_cabin'>
          <img src={littleCabin} alt='Little cabin' />
          <div>
            <a href='#'>Little cabin</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabins;
