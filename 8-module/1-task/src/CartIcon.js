import React, { useState, useEffect } from "react";

function CartIcon({ cart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => updatePosition();
    const handleResize = () => updatePosition();
    const cartIcon = document.querySelector('.cart-icon');

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    updatePosition();
    cartIcon.classList.add('shake');
    cartIcon.addEventListener('transitionend', () => {
      cartIcon.classList.remove('shake');
    }, {once: true})

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [cart.products.length]);

  const updatePosition = () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartIconRect = cartIcon.getBoundingClientRect();
    let iconTopCoord = cartIconRect.top;
    const iconWidth = cartIcon.offsetWidth;
    const windowWidth = document.documentElement.clientWidth;
    const container = document.querySelector('.container');
    const cartIconVisible = cart.products.length !== 0; 

    if (cartIconVisible && window.pageYOffset > iconTopCoord) {
      setVisible(true);
      cartIcon.classList.add('cart-icon_visible');
      let leftIndent = Math.min(
        container.getBoundingClientRect().right + 20,
        windowWidth - iconWidth - 10
      ) + 'px';
      cartIcon.style.position = 'fixed';
      cartIcon.style.top = '50px';
      cartIcon.style.right = '10px';
      cartIcon.style.zIndex = 1e3;
      cartIcon.style.left = leftIndent;
    } else if (windowWidth <= 767) {
      cartIcon.style.position = '';
      cartIcon.style.top = '';
      cartIcon.style.right = '';
      cartIcon.style.zIndex = '';
      cartIcon.style.left = `{{windowWidth - iconWidth - 10}}`;
    } else {
      cartIcon.style.position = '';
      cartIcon.style.top = '';
      cartIcon.style.right = '';
      cartIcon.style.zIndex = '';
      cartIcon.style.left = '';
      setVisible(false);
      cartIcon.classList.remove('cart-icon_visible');
    }
  }

  return (
    <div
      className={`cart-icon ${visible ? 'cart-icon_visible' : ''}`}
    >
    {cart.products.length === 0 ? null : (
      <div className="cart-icon__inner">
        <span className="cart-icon__count">{cart.products.length}</span>
        <span className="cart-icon__price">€{cart.products.reduce((totalPrice, product) => totalPrice + product.price, 0).toFixed(2)}</span>
      </div>
    )}
    </div>
    );
}

export default CartIcon;