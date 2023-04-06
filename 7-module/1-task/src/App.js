import Categories from "./Categories";

function App() {
  return (
    <div className="container">
      <div className="ribbon">
        <button className="ribbon__arrow ribbon__arrow_left">
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </button>
        <nav className="ribbon__inner">
          <Categories />
        </nav>
        <button className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/images/icons/angle-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
