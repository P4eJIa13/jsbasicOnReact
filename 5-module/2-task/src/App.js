import { useState } from "react";
import './App.css';

function ToggleText() {
  const [isToggleText, setIsToggleText] = useState(false);

  const toggleText = () => {
    let txt = document.getElementById('text');
    txt.hidden = true;
    setIsToggleText(true);
  }

  const resetChanges = () => {
    let txt = document.getElementById('text');
    txt.hidden = false;
    setIsToggleText(false)
  }

  const btnClick = () => {
    if (isToggleText) {
      resetChanges();
    } else {
      toggleText();
    }
  }
  
  return (
    <>
      <button className="toggle-text-button" onClick={btnClick}>
      {isToggleText ? 'Нажмите, чтобы показать текст' : 'Нажмите, чтобы спрятать текст'}</button>
      <div id="text">Текст</div>
    </>
  );
}

export default ToggleText;
