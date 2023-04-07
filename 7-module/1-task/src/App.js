import React, {useEffect, useRef, useCallback} from 'react';
import Categories from "./Categories";

function App() {
  const ribbonInner = useRef(null);
  const scrollWidth = useRef(null);

  const clickBtnNext = (evt) => {
    if (evt.target.closest('.ribbon__arrow_right')) {
      ribbonInner.current.scrollBy(350, 0);
    }
    buttons();
  }

  const clickBtnPrev = (evt) => {
    if (evt.target.closest('.ribbon__arrow_left')) {
      ribbonInner.current.scrollBy(-350, 0);
    }
    buttons();
  }

  const buttons = useCallback(() => {
    const btnPrev = document.querySelector('.ribbon__arrow_left');
    const btnNext = document.querySelector('.ribbon__arrow_right');
    let clientWidth = ribbonInner.current.clientWidth;
    scrollWidth.current = ribbonInner.current.scrollWidth;
    let scrollLeft = ribbonInner.current.scrollLeft;
    let scrollRight = scrollWidth.current - scrollLeft - clientWidth;

    if (btnNext && btnPrev) {
     if (scrollLeft === 0) {
      btnPrev.classList.remove('ribbon__arrow_visible');
     } else {
      btnPrev.classList.add('ribbon__arrow_visible');
     }
     if (scrollRight < 1) {
      btnNext.classList.remove('ribbon__arrow_visible');
     } else {
      btnNext.classList.add('ribbon__arrow_visible');
     }
    }
  }, [])

  useEffect(() => {
    ribbonInner.current = document.querySelector('.ribbon__inner');
    
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
