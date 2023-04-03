
function App() {
  let product = {
    name: "Laab kai chicken salad", 
    price: 10, 
    category: "salads", 
    image: "/images/products/laab_kai_chicken_salad.png", 
    id: "laab-kai-chicken-salad" 
  }

  function productAdd() {
    const event = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });
    document.getElementById("holder").dispatchEvent(event);
  }

  return (
    <div id="holder" className="container_half">
        <div className="card" id={product.id} key={product.id}>
          <div className="card__top">
            <img src={product.image} className="card__image" alt="product" />
            <span className="card__price">€{product.price.toFixed(2)}</span>
          </div>
          <div className="card__body">
            <div className="card__title">{product.name}</div>
            <button 
              type="button" 
              className="card__button"
              onClick={productAdd}
            >
              <img src="/images/icons/plus-icon.svg" alt="icon" />
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
