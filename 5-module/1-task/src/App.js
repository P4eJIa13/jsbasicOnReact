import './App.css';

function HideSelf() {
  const hideSelf = () => {
    let btn = document.querySelector('.hide-self-button');
    btn.hidden = true;
  }

  return (
    <button className="hide-self-button" onClick={hideSelf}>Нажмите, чтобы спрятать</button>
  );
}

export default HideSelf;
