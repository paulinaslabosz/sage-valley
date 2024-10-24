import React from 'react';
import './Cabin.scss';
import { useParams } from 'react-router-dom';
import { cabinData } from '../cabinData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faBed, faBath } from '@fortawesome/free-solid-svg-icons';

function Cabin() {
  const { id } = useParams();
  const currentCabin = cabinData.find((element) => element.name === id);

  return (
    <>
      <h2 className='cabin_title'>{currentCabin.title}</h2>
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
                  return <li key={index}>{el}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className='cabin_img'>
            <img src={currentCabin.img} alt={currentCabin.title} />
          </div>
        </div>
        <div className='cabin_gallery'>GALERIA</div>
      </div>
    </>
  );
}

export default Cabin;
