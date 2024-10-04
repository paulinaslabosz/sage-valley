import React from 'react';
import './styles/Icons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareParking,
  faWifi,
  faTree,
  faDog,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function Icons() {
  return (
    <div className='icons_wrapper'>
      <ul>
        <li>
          <FontAwesomeIcon icon={faSquareParking} />
          <p>Free parking</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faSquare} />
          <p>Fenced area</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faWifi} />
          <p>Free WiFi</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faTree} />
          <p>Lot of greenery</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faDog} />
          <p>Animals accepted</p>
        </li>
      </ul>
    </div>
  );
}

export default Icons;
