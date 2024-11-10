import { React, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Lightbox.scss';
function Lightbox({ location, images }) {
  const [showLine, setShowLine] = useState(true);

  const gallery = images.map((image) => (
    <div className='lightbox_gallery-image'>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  return (
    <div className='lightbox_wrapper'>
      <div className='lightbox_title'>
        <h3 className='lightbox_title-text'>Gallery</h3>
        <CSSTransition
          in={showLine}
          key={location.key}
          classNames='line-grow'
          timeout={1600}
        >
          <div className='lightbox_title-line line'></div>
        </CSSTransition>
      </div>
      <div className='lightbox_gallery'>{gallery}</div>
    </div>
  );
}

export default Lightbox;
