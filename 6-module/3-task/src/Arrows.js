import React, {useEffect, useRef, useCallback} from 'react';
import Carousel from "./Carousel";

const Arrows = () => {
  let position = useRef(0);
  const carouselInner = useRef(null);
  const slideWidth = useRef(0);

  const clickBtnNext = () => {
    position.current++;
    carouselInner.current.style.transform = `translateX(-${slideWidth.current * position.current}px)`;
    buttons();
  }

  const clickBtnPrev = () => {
    position.current -= 1;
    carouselInner.current.style.transform = `translateX(-${slideWidth.current * position.current}px)`;
    buttons();
  }

  const buttons = useCallback(() => {
    const btnPrev = document.querySelector('.carousel__arrow_left');
    const btnNext = document.querySelector('.carousel__arrow_right');
    const slideCount = document.querySelectorAll('.carousel__slide').length;

    if (btnPrev && btnNext) {
      if (position.current === 0) {
        btnPrev.style.display = 'none';
      } else {
        btnPrev.style.display = '';
      }
      if (position.current === slideCount - 1) {
        btnNext.style.display = 'none';
      } else {
        btnNext.style.display = '';
      }
    }
  }, [position]);
  

  useEffect(() => {
    carouselInner.current = document.querySelector('.carousel__inner');
    slideWidth.current = carouselInner.current.offsetWidth;
    if (carouselInner.current) {
      buttons();
    }
  }, [buttons]);

  buttons();

  return (
    <>
    <div className="carousel__arrow carousel__arrow_right" onClick={clickBtnNext}>
        <img src="/images/icons/angle-icon.svg" alt="icon" />
      </div>
      <div className="carousel__arrow carousel__arrow_left" onClick={clickBtnPrev}>
        <img src="/images/icons/angle-left-icon.svg" alt="icon" />
      </div>
    <div className="carousel__inner">
      <Carousel />
    </div>
    </>
  )
}

export default Arrows;