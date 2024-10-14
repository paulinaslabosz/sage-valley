import React from 'react';
import './Slider.scss';

function Slider({ images }) {
  const sliderElements = images.map((image, index) => (
    <img src={image.props.src} alt={image.props.alt} key={index} />
  ));
  return <div>{sliderElements}</div>;
}

export default Slider;
