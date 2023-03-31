import React, { useContext } from 'react';
import '../Arrows/Arrows.css';
import { SliderContext } from '../Carousel';

export default function Arrows() {
  const { chageSlide } = useContext(SliderContext); 
    return (
      <>
        <div className="carousel__arrow carousel__arrow_right" onClick={() => chageSlide(1)}>
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </div>
        <div className="carousel__arrow carousel__arrow_left" onClick={() => chageSlide(-1)}>
          <img src="/images/icons/angle-left-icon.svg" alt="icon" />
        </div>
      </>
    )
  }