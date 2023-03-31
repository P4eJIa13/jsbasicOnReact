import React, {useEffect, useState} from "react";
// import './Carousel.css'
import slides from "./data";

function CarouselNew() {
  const [slidesArr] = useState(slides);
  const [currentIndex, setIndex] = useState(0);
   
  useEffect(() => {
    let lastSlide = slides.length - 1;
    if (currentIndex < 0) {
      setIndex(lastSlide)
    }

    if (currentIndex > lastSlide) {
      setIndex(0)
    }
  }, [currentIndex, slidesArr]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0
    if (currentIndex + direction < 0) {
      slideNumber = slides.length - 1;
    } else {
      slideNumber = (currentIndex + direction) % slides.length;
    }
    setIndex(slideNumber);
  }

  return (
    <>
      <div className="container" data-carousel-holder>
        <div className="carousel">
          <div className="carousel__arrow carousel__arrow_right" onClick={() => changeSlide(1)}>
            <img src="/images/icons/angle-icon.svg" alt="icon" />
          </div>
          <div className="carousel__arrow carousel__arrow_left" onClick={() => changeSlide(-1)}>
            <img src="/images/icons/angle-left-icon.svg" alt="icon" />
          </div>
          <div className="carousel__inner" style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
            {slidesArr.map((slide) => {
              
              return (
                <div className="carousel__slide" data-id={slide.id} key={slide.id}>
                  <img src={slide.image} className="carousel__img" alt="slide" />
                  <div className="carousel__caption">
                    <span className="carousel__price">`€{slide.price}`</span>
                    <div className="carousel__title">{slide.name}</div>
                    <button type="button" className="carousel__button">
                      <img src="/images/icons/plus-icon.svg" alt="icon" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
    )
}

export default CarouselNew