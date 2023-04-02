import './index.css';
import Carousel from './Carousel';
import Arrows from './Arrows';

function App() {
  return (
    <div className="container" data-carousel-holder>
      <div className="carousel">
        <Arrows />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
