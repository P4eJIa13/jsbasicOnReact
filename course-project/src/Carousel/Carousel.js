import React from "react";
import './Carousel.css';
import Products from "./Product";

function Carousel() {
    return (
      <div className="container" data-carousel-holder>
      {/* <div className="carousel"> */}
        <div className="carousel__arrow carousel__arrow_right">
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </div>
        <div className="carousel__arrow carousel__arrow_left">
          <img src="/images/icons/angle-left-icon.svg" alt="icon" />
        </div>
        <Products />
        {/* </div> */}
    </div>
    )
}

export default Carousel

