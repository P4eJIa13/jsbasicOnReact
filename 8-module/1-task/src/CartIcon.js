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
    cartIcon.removeEventListener('transitionend', () => {
      cartIcon.classList.remove('shake');
    }, {once: true})

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [cart]);

  useEffect(() => {
    if (cart.products.length > 0) {
      setVisible(true);
      const cartIcon = document.querySelector('.cart-icon');
      cartIcon.classList.add('cart-icon_visible');
    } else {
      setVisible(false);
      const cartIcon = document.querySelector('.cart-icon');
      cartIcon.classList.remove('cart-icon_visible');
    }
  }, [cart.products])

  const updatePosition = () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartIconRect = cartIcon.getBoundingClientRect();
    let iconTopCoord = cartIconRect.top;
    let initialTopCoord = iconTopCoord + window.pageYOffset;
    const iconWidth = cartIcon.offsetWidth;
    const windowWidth = document.documentElement.clientWidth;
    const container = document.querySelector('.container');
    const cartIconVisible = cart.products.length > 0; 
    const shouldVisible = cartIconVisible && (window.pageYOffset > initialTopCoord || windowWidth < 767);
    // const shouldVisible = cartIconVisible && ((iconTopCoord + window.pageYOffset < window.innerHeight) || windowWidth < 767);

    if (shouldVisible !== visible) {
      setVisible(shouldVisible);
    }

    if (shouldVisible) {
      let leftIndent = Math.min(
        container.getBoundingClientRect().right + 20,
        windowWidth - iconWidth - 10
      ) + 'px';
      cartIcon.style.position = 'fixed';
      cartIcon.style.top = '50px';
      cartIcon.style.right = '10px';
      cartIcon.style.zIndex = 1e3;
      cartIcon.style.left = leftIndent;
    } else {
      cartIcon.style.position = '';
      cartIcon.style.top = '';
      cartIcon.style.right = '';
      cartIcon.style.zIndex = '';
      cartIcon.style.left = '';
    }
  }

  return (
    <div className="cart-icon">
    {cart.products.length === 0 ? null : (
      <div className="cart-icon__inner">
        <span className="cart-icon__count">{cart.products.length}</span>
        <span className="cart-icon__price">
          €
          {cart.products
          .reduce((totalPrice, product) => totalPrice + product.price, 0)
          .toFixed(2)}
        </span>
      </div>
    )}
    </div>
    );
}

export default CartIcon;