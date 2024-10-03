import React from 'react';
import bigCabin from '../../../images/BigCabin.jpg';
import littleCabin from '../../../images/LittleCabin.jpg';

function Cabins() {
  return (
    <div>
      <div>
        <img src={bigCabin} alt='Big cabin' />
        <div>
          <button>Click to see</button>
        </div>
      </div>
      <div>
        <img src={littleCabin} alt='Little cabin' />
        <div>
          <button>Click to see</button>
        </div>
      </div>
    </div>
  );
}

export default Cabins;
