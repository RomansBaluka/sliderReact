import React, { useRef, useEffect, useState } from 'react';
import { SliderData } from '../SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Item from './imageItem.js';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
    let slide = 'nextSlide';
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
    let slide = 'prevSlide';
  };

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> 
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> 
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Item image={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
