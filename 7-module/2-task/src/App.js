import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(null);
  
  useEffect(() => {
    function keyDown(event) {
      if (event.code === "Escape") {
        closeModal();
      }
    }
    document.addEventListener('keydown', keyDown);

    return ()=> {
      document.removeEventListener('keydown', keyDown)
    }
  }, []);

  const ModalButton = {
    background: "white", 
    color: "black", 
    padding: "10px"
  };
  
  const openModal = (title, content) => {
    setTitle(title);
    setBody(content);
    setIsOpen(true);
    document.body.classList.add("is-modal-open");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("is-modal-open");
    setTitle("");
    setBody(null);
  };

  return (
    <div className="container">
      <button 
        className="button" 
        style={ModalButton} 
        onClick={() => 
          openModal(
            "Заголовок модального окна", 
            "<b>тут содержится тело модального окна</b>"
          )
        }
      >
        Нажми меня, чтобы открыть модальное окно
      </button>
      {isOpen && (
      <div className="modal">
        <div className="modal__overlay" onClick={closeModal}></div>
        <div className="modal__inner">
          <div className="modal__header">
            <button 
              type="button" 
              className="modal__close" 
              onClick={closeModal}
            >
              <img src="/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 className="modal__title">{title}</h3>
          </div>
          <div 
            className="modal__body" 
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>
      </div>
    )}
    </div>
  );
}

export default App;
