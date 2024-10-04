import React from 'react';
import './styles/Content.scss';
import intimacyImg from '../../../images/intimacy.jpg';
import peaceImg from '../../../images/peace.jpg';

function Content() {
  return (
    <div className='content_wrapper'>
      <div className='content_section'>
        <div className='content_section-img'>
          <img src={peaceImg} alt='Cabin with lake' />
          <p className='title_first'>Peace</p>
        </div>
        <div className='content_section-description section_first'>
          <h2>
            Sage
            <br />
            Valley{' '}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='content_section'>
        <div className='content_section-description section_second'>
          <h2>
            Sage
            <br />
            Valley{' '}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='content_section-img'>
          <img src={intimacyImg} alt='Cabin at night' />
          <p className='title_second'>Intimacy</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
