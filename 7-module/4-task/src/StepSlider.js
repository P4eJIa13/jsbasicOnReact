import React, { useState, useEffect, useRef } from 'react';

function StepSlider({ config }) {
  const [value, setValue] = useState(config.value);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const sliderSteps = sliderRef.current.querySelectorAll('.slider__steps span');
    sliderSteps.forEach((step, index) => {
      if (index === value) {
        step.classList.add('slider__step-active');
      } else {
        step.classList.remove('slider__step-active');
      }
    });

    const sliderChangeEvent = new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    });
    sliderRef.current.dispatchEvent(sliderChangeEvent);
  }, [value]);

  const onThumbPointerDown = (event) => {
    setDragging(true);
    sliderRef.current.classList.add('slider_dragging');
  }

  const onThumbPointerUp = (event) => {
    setDragging(false);
    sliderRef.current.classList.remove('slider_dragging');
  }

  const onThumbPointerMove = (event) => {
    if (!dragging) return;
    const thumb = thumbRef.current;
    const progress = sliderRef.current.querySelector('.slider__progress');
    const sliderSteps = sliderRef.current.querySelectorAll('.slider__steps span');
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;

    let newValue = Math.round(((config.steps - 1) * offsetX) / sliderRect.width);

    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > config.steps - 1) {
      newValue = config.steps - 1;
    }

    setValue(newValue);

    thumb.style.left = `${(newValue / (config.steps - 1)) * 100}%`;
    progress.style.width = `${(newValue / (config.steps - 1)) * 100}%`;

    sliderSteps.forEach((step, index) => {
      if (index === newValue) {
        step.classList.add('slider__step-active');
      } else {
        step.classList.remove('slider__step-active');
      }
    });
  };

  const onSliderClick = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    let newValue = Math.round(((config.steps - 1) * offsetX) / sliderRect.width)
    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > config.steps - 1) {
      newValue = config.steps - 1;
    }
    setValue(newValue);
  }

  useEffect(() => {
    document.addEventListener('mousemove', onThumbPointerMove);
    document.addEventListener('mouseup', onThumbPointerUp);
    document.addEventListener('touchmove', onThumbPointerMove);
    document.addEventListener('touchend', onThumbPointerUp);

    return () => {
      document.removeEventListener('mousemove', onThumbPointerMove);
      document.removeEventListener('mouseup', onThumbPointerUp);
      document.removeEventListener('touchmove', onThumbPointerMove);
      document.removeEventListener('touchend', onThumbPointerUp);
    }

    // eslint-disable-next-line
  }, [dragging])

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={onThumbPointerDown}
      onTouchStart={onThumbPointerDown}
      onClick={onSliderClick}
    >
      <div 
        className="slider__thumb" 
        style={{ left: `${(value / (config.steps - 1)) * 100}%` }}
        ref={thumbRef}
      >
        <span className="slider__value">{value}</span>
      </div>
      <div className="slider__progress" style={{ width: `${(value / (config.steps - 1)) * 100}%` }}></div>
      <div className="slider__steps">
        {Array.from({ length: config.steps }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
}

export default StepSlider;