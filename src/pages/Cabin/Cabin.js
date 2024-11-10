import { React, useState } from 'react';

import './Cabin.scss';
import Lightbox from './Lightbox.js';
import { CSSTransition } from 'react-transition-group';

import { useParams } from 'react-router-dom';
import { cabinData } from '../../cabinData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPerson,
  faBed,
  faBath,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

function Cabin({ location }) {
  const { id } = useParams();
  const currentCabin = cabinData.find((element) => element.name === id);
  const [showLine, setShowLine] = useState(true);
  return (
    <div className='cabin'>
      <div className='cabin_title-wrapper'>
        <h2 className='cabin_title'>{currentCabin.title}</h2>
        <CSSTransition
          in={showLine}
          key={location.key}
          classNames='line-grow'
          timeout={1600}
        >
          <div className='cabin_title-line line'></div>
        </CSSTransition>
      </div>

      <div className='cabin_wrapper'>
        <div className='cabin_content'>
          <div className='cabin_description'>
            <div className='cabin_details'>
              <span>
                <FontAwesomeIcon icon={faPerson} />
                {currentCabin.details.people}
              </span>
              <span>
                <FontAwesomeIcon icon={faBed} />
                {currentCabin.details.beds}
              </span>
              <span>
                <FontAwesomeIcon icon={faBath} />
                {currentCabin.details.bathrooms}
              </span>
            </div>
            <div className='cabin_facilities'>
              <ul>
                {currentCabin.facilities.map((el, index) => {
                  return (
                    <li key={index}>
                      <FontAwesomeIcon icon={faPlay} /> {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='cabin_img'>
            <img src={currentCabin.img} alt={currentCabin.title} />
          </div>
        </div>
        <div className='cabin_gallery'>
          <Lightbox location={location} />
        </div>
      </div>
    </div>
  );
}

export default Cabin;
