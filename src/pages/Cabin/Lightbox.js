import { React, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Lightbox.scss';
function Lightbox({ location, images }) {
  const [showLine, setShowLine] = useState(true);

  const gallery = images.map((image) => (
    <div className='gallery_list-image'>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

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
    </div>
  );
}

export default Lightbox;
