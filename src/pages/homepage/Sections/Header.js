import React from 'react';
import './styles/Header.scss';
import video from '../../../images/headerVideo.mp4';

function Header() {
  return (
    <div className='header_wrapper'>
      <video muted autoPlay={'autoplay'} preLoad='auto' loop>
        <source src={video} type='video/mp4' />
      </video>
      <div className='header_text'>
        <p>Welcome to Sage Valley</p>
      </div>
    </div>
  );
}

export default Header;
