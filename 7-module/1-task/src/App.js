import React, {useEffect, useRef, useCallback} from 'react';
import Categories from "./Categories";

function App() {
  const ribbonInner = useRef(null);
  const btnPrev = useRef(null);
  const btnNext = useRef(null);
  const scrollWidth = useRef(null);

  const clickBtnNext = () => {
    ribbonInner.current.scrollBy(350, 0);
    buttons();
  }

  const clickBtnPrev = () => {
    ribbonInner.current.scrollBy(-350, 0);
    buttons();
  }

  const buttons = useCallback(() => {
    const clientWidth = ribbonInner.current.clientWidth;
    scrollWidth.current = ribbonInner.current.scrollWidth;
    const scrollLeft = ribbonInner.current.scrollLeft;
    const scrollRight = scrollWidth.current - scrollLeft - clientWidth;

    if (btnNext.current && btnPrev.current) {
     if (scrollLeft === 0) {
      btnPrev.current.classList.remove('ribbon__arrow_visible');
     } else {
      btnPrev.current.classList.add('ribbon__arrow_visible');
     }
     if (scrollRight < 1) {
      btnNext.current.classList.remove('ribbon__arrow_visible');
     } else {
      btnNext.current.classList.add('ribbon__arrow_visible');
     }
    }
  }, [])

  useEffect(() => {
    ribbonInner.current = document.querySelector('.ribbon__inner');
    btnPrev.current = document.querySelector('.ribbon__arrow_left');
    btnNext.current = document.querySelector('.ribbon__arrow_right');
    
    const handleScroll = () => {
      buttons();
    };

    if (ribbonInner.current) {
      ribbonInner.current.addEventListener('scroll', handleScroll);
      buttons();
    }

    return () => {
      ribbonInner.current.removeEventListener('scroll', handleScroll);
    };
  }, [buttons]);

  return (
    <div className="container">
      <div className="ribbon">
        <button className="ribbon__arrow ribbon__arrow_left" onClick={clickBtnPrev}>
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </button>
        <nav className="ribbon__inner">
          <Categories />
        </nav>
        <button className="ribbon__arrow ribbon__arrow_right" onClick={clickBtnNext}>
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
