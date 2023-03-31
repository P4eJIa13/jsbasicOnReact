import React, { createContext, useState } from "react";
import './Carousel.css';
import Products from "./Product";
import Arrows from "./Arrows/Arrows";

export const SliderContext = createContext();

const Carousel = () => {
  const [slides] = useState();
  const [currentIndex, setIndex] = useState(0);
   
  const chageSlide = (direction = 1) => {
    let slideNumber = 0;
    if (currentIndex + direction < 0) {
      slideNumber = slides.length - 1;
    } else {
      slideNumber = (currentIndex + direction) % slides.length;
    }

    setIndex(slideNumber);

  };

  return (
      <div className="container" data-carousel-holder>
      <div className="carousel">
        <SliderContext.Provider
        value = {{
          chageSlide,
          slideNumber: currentIndex,
          slides,
        }}
        >
        <Arrows />
        <Products />
        </SliderContext.Provider>
        </div>
    </div>
    ) 
}

export default Carousel

