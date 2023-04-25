import React, { useState, useEffect, useRef } from 'react';

function StepSlider({ config }) {
  const [value, setValue] = useState(config.value);
  const sliderRef = useRef(null);

  useEffect(() => {
    const steps = sliderRef.current.querySelectorAll('.slider__steps span');
    steps.forEach((step, index) => {
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

  const handleThumbDrag = (event) => {
    const thumb = sliderRef.current.querySelector('.slider__thumb');
    const progress = sliderRef.current.querySelector('.slider__progress');
    const steps = sliderRef.current.querySelectorAll('.slider__steps span');
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;

    let newValue = Math.round(((config.steps - 1) * offsetX) / sliderRect.width);

    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > config.steps) {
      newValue = config.steps - 1;
    }

    setValue(newValue);

    thumb.style.left = `${(newValue / (config.steps - 1)) * 100}%`;
    progress.style.width = `${(newValue / (config.steps - 1)) * 100}%`;

    steps.forEach((step, index) => {
      if (index === newValue) {
        step.classList.add('slider__step-active');
      } else {
        step.classList.remove('slider__step-active');
      }
    });
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={handleThumbDrag}
      onTouchStart={handleThumbDrag}
    >
      <div className="slider__thumb" style={{ left: `${(value / (config.steps - 1)) * 100}%` }}>
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