import React from "react";
import './Carousel.css';
import Products from "./Product";
import Arrows from "./Arrows/Arrows";

function Carousel() {
    return (
      <div className="container" data-carousel-holder>
      {/* <div className="carousel"> */}
        <Arrows />
        <Products />
        {/* </div> */}
    </div>
    )
}

export default Carousel

