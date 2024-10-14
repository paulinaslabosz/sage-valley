import React from 'react';
import './Slider.scss';

function Slider({ images }) {
  const sliderElements = images.map((image, index) => (
    <img src={image.props.src} alt={image.props.alt} key={index} />
  ));
  return (
    <div className='atr_slider'>
      <div className='slider-track'>{sliderElements}</div>
      <div className='slider-track'>{sliderElements}</div>
    </div>
  );
}

export default Slider;
