
function App() {
  return (
    <div className="container" style={{padding: '50px'}}>
      <div className="slider">

        <div className="slider__thumb" style={{left: '50%'}}>
          <span className="slider__value">2</span>
        </div>

        <div className="slider__progress" style={{width: '50%'}}></div>

        <div className="slider__steps">
          <span></span>
          <span></span>
          <span className="slider__step-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </div>
  );
}

export default App;
