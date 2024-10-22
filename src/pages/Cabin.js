import React from 'react';
import { useParams } from 'react-router-dom';
import { cabinData } from '../cabinData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faBed, faBath } from '@fortawesome/free-solid-svg-icons';

function Cabin() {
  const { id } = useParams();
  const currentCabin = cabinData.find((element) => element.name === id);

  return (
    <>
      <h2>{currentCabin.title}</h2>
      <div>
        <div>
          <div>
            <div>
              <span>
                <FontAwesomeIcon icon={faPerson} />
                {currentCabin.details.people}
              </span>
              <span>
                <FontAwesomeIcon icon={faBed} /> {currentCabin.details.beds}
              </span>
              <span>
                <FontAwesomeIcon icon={faBath} />{' '}
                {currentCabin.details.bathrooms}
              </span>
            </div>
            <div>
              <ul>
                {currentCabin.facilities.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
              </ul>
            </div>
          </div>
          <div>
            <img src='' alt='' />
          </div>
        </div>
        <div>GALERIA</div>
      </div>
    </>
  );
}

export default Cabin;
