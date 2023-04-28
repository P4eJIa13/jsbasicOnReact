import CartIcon from "./CartIcon";
import './index.css';
import './product-grid.css';
import './common.css';
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({ products: [] });

  const product = { 
    price: 7, 
    count: 1,
   };

  const addToCart = () => {
    const productToAdd = {...product}; 
    setCart({ products: [...cart.products, productToAdd] });
  }

  const removeAllProducts = () => {
    setCart({ products: [] });
  }

  return (
    <>
      <header className="header container">
        <h1 className="heading logo">Бангкок Экспресс</h1>
        <h3 className="subheading">Отличная еда・Бесплатная доставка・Лучшие цены</h3>
        <div data-cart-icon-holder>
          <CartIcon cart={cart} />
        </div>
      </header>

      <main>
        <div className="container" style={{paddingBottom: '40px'}}>
          <h2 className="section-heading">Наше Меню</h2>

          <div>
            <button className="button" onClick={addToCart} data-add-product>
              Добавить один товар
            </button>
          </div>

          <div style={{paddingTop: '40px'}}>
            <button 
              className="button" 
              onClick={removeAllProducts} 
              data-remove-all-products
            >
              Удалить все товары
            </button>
          </div>
        </div>

        <div className="container">
          <div className="products-grid is-loading">
            <div className="products-grid__skeleton">
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
              <div className="products-grid__skeleton-item"></div>
            </div>

            <div className="products-grid__inner"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
