import React from 'react';
import intimacyImg from '../../../images/intimacy.jpg';
import peaceImg from '../../../images/peace.jpg';

function Content() {
  return (
    <div>
      <div>
        <div>
          <img src={peaceImg} alt='Cabin photo with lake' />
          <p>Peace</p>
        </div>
        <div>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={intimacyImg} alt='Cabin photo at night' />
          <p>Intimacy</p>
        </div>
        <div>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
