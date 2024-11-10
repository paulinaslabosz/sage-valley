import { React, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Lightbox.scss';
function Lightbox({ location, images }) {
  //for transition
  const [showLine, setShowLine] = useState(true);
  //for lightbox
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const gallery = images.map((image) => (
    <div className='gallery_list-image'>
      <img
        src={image.src}
        alt={image.alt}
        onClick={() => showLightbox(image.src)}
      />
    </div>
  ));

  const showLightbox = (image) => {
    setLightboxDisplay(true);
    setImageToShow(image);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
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
      {lightboxDisplay ? (
        <div className='lightbox' onClick={() => hideLightbox()}>
          <FontAwesomeIcon icon={faCircleChevronLeft} />

          <img className='lightbox_img' src={imageToShow} />
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Lightbox;
