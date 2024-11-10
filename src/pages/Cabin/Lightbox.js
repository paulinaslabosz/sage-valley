import { React, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Lightbox.scss';
function Lightbox({ location }) {
  const [showLine, setShowLine] = useState(true);

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
      <ul>
        <li>element</li>
        <li>element</li>
        <li>element</li>
        <li>element</li>
        <li>element</li>
        <li>element</li>
      </ul>
    </div>
  );
}

export default Lightbox;
