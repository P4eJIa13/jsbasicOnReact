
function App() {
  return (
    <div className="container">
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__inner">
          <div className="modal__header">
            <button type="button" className="modal__close">
              <img src="/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 className="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
          <div className="modal__body">
            А сюда нужно добавлять содержимое модального окна
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
