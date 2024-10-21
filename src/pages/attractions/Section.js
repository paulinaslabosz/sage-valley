import React from 'react';
import { useParams } from 'react-router-dom';
import './Section.scss';
import Slider from './Slider';

function Section({ data }) {
  const { id } = useParams();
  const currentSection = data.find((element) => element.name === id);

  return (
    <>
      <div className='section_wrapper'>
        <div className='section_img'>
          <img src={currentSection.img} alt='Girl in hot tub' />
        </div>
        <div className='section_content'>
          <h3 className='section_title'>{currentSection.title}</h3>
          <p>{currentSection.content}</p>
        </div>
      </div>
      <div className='section_corousel'>
        <Slider images={currentSection.slider} />
      </div>
    </>
  );
}

export default Section;
