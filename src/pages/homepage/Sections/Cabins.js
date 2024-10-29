import React from 'react';
import './styles/Cabins.scss';
import { Link } from 'react-router-dom';
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
            <Link to='bigCabin'>Big cabin</Link>
          </div>
        </div>
        <div className='cabins_cabin'>
          <img src={littleCabin} alt='Little cabin' />
          <div>
            <Link to='littleCabin'>Little cabin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabins;
