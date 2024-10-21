import React from 'react';
import { useParams } from 'react-router-dom';
import { cabinData } from '../cabinData';

function BigCabin() {
  const { id } = useParams();
  const currentCabin = cabinData.find((element) => element.name === id);

  return (
    <>
      <h2>{currentCabin.title}</h2>
      <div>
        <div>
          <div>
            <div>
              <span>#icon {currentCabin.details.people}</span>
              <span>#icon {currentCabin.details.beds}</span>
              <span>#icon {currentCabin.details.bathrooms}</span>
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

export default BigCabin;
