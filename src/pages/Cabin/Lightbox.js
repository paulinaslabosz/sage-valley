import { React, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Lightbox.scss';
function Lightbox({ location, images }) {
  //for transition
  const [showLine, setShowLine] = useState(true);
  //for lightbox
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const gallery = images.map((image) => (
    <div className='gallery_list-image'>
      <img src={image.src} alt={image.alt} onClick={() => showLightbox()} />
    </div>
  ));

  const showLightbox = () => {
    setLightboxDisplay(true);
  };
  return (
    <div className='gallery_wrapper'>
      <div className='gallery_title'>
        <h3 className='gallery_title-text'>Gallery</h3>
        <CSSTransition
          in={showLine}
          key={location.key}
          classNames='line-grow'
          timeout={1600}
        >
          <div className='gallery_title-line line'></div>
        </CSSTransition>
      </div>
      <div className='gallery_list'>{gallery}</div>
      {lightboxDisplay ? <div className='lightbox'></div> : ''}
    </div>
  );
}

export default Lightbox;
