import { useState } from "react";

function App() {

  let config = {
    steps: 5,
    value: 0
  }

  const [activeStep, setActiveStep] = useState('');
  const element = document.querySelector('.slider');

  const activeSlider = ((evt, i) => {
    evt.preventDefault();
    let left = evt.clientX - element.getBoundingClientRect().left;
    let leftRelative = left / element.offsetWidth;
    let segments = config.steps - 1;
    let value = Math.round(leftRelative * segments);
    let valuePercents = value / segments * 100;
    let thumb = element.querySelector('.slider__thumb');
    let progress = element.querySelector('.slider__progress');
    element.querySelector('.slider__value').innerHTML = value;
    thumb.style.left = (value === 0 ? 0 : `${valuePercents}%`);
    progress.style.width = (value === 0 ? 0 : `${valuePercents}%`)
    const sliderStep = evt.target.closest('slider__step');
    setActiveStep(i);
    const prevActiveStep = document.querySelector('.slider__step-active');
    if (prevActiveStep) {
      prevActiveStep.classList.remove('slider__step-active');
    }
    if (sliderStep) {
      sliderStep.classList.add('slider__step-active')
    }
    const slideSelectEvent = new CustomEvent('slider-change', {
      detail: config.value,
      bubbles: true
    });
    document.documentElement.dispatchEvent(slideSelectEvent);
  })

  const getSliderSpan = config => {
    let spanHTML = [];
    for (let i = 0; i < config.steps; i++) {
      spanHTML.push(
        <span 
          className={`${i === activeStep ? 'slider__step-active' : ''}`}
          key={i}
          onClick={(evt) => activeSlider(evt, i)}
        >
          {i}
        </span>
      )
    }
    return spanHTML;
  }

  return (
    <div className="container" style={{padding: '50px'}}>
      <div className="slider">

        <div className="slider__thumb" style={{left: '{(100 / (config.steps - 1)) * config.value}'}}>
          <span className="slider__value"></span>
        </div>

        <div className="slider__progress" style={{width: '{(100 / (config.steps - 1)) * config.value}'}}></div>

        <div className="slider__steps">
          {getSliderSpan(config)}
        </div>
      </div>

    </div>
  );
}

export default App;
