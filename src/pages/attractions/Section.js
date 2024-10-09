import React from 'react';
import './Section.scss';
import tub from '../../images/attractions/hottub.jpg';

function Section() {
  return (
    <>
      <div className='section_wrapper'>
        <div className='section_img'>
          <img src={tub} alt='Girl in hot tub' />
        </div>
        <div className='section_content'>
          <h3 className='section_title'>Hot Tub</h3>
          <p>
            Whether you're looking for a traditional wellness experience or a
            cozy getaway, this summer cottage with its authentic banya and hot
            tub is the perfect destination for relaxation and rejuvenation.
            Heated to a soothing temperature, the hot tub provides a perfect
            escape to melt away stress, while surrounded by the fresh air and
            natural beauty of the countryside. The combination of warm water and
            the peaceful ambiance makes it the perfect spot for deep relaxation,
            whether during the day amidst the birdsong or at night under the
            stars.
          </p>
        </div>
      </div>
      <div className='section_corousel'></div>
    </>
  );
}

export default Section;
