import React from 'react';
import '../Arrows/Arrows.css';

function Arrows() {
  return (
    <>
    <div className="carousel__arrow carousel__arrow_right">
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </div>
        <div className="carousel__arrow carousel__arrow_left">
          <img src="/images/icons/angle-left-icon.svg" alt="icon" />
        </div>
    </>
  )
}

export default Arrows