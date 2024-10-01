import React from 'react';
import video from '../../../images/headerVideo.mp4';

function Header() {
  return (
    <>
      <video muted autoPlay={'autoplay'} preLoad='auto' loop>
        <source src={video} type='video/mp4' />
      </video>
    </>
  );
}

export default Header;
