
const Carousel = () => {
  const slides = [
    {
      "name": "Penang shrimp",
      "price": 16,
      "image": "/images/carousel/penang_shrimp.png",
      "id": "penang-shrimp",
    },
    {
      "name": "Chicken cashew",
      "price": 14,
      "image": "/images/carousel/chicken_cashew.png",
      "id": "chicken-cashew",
    },
    {
      "name": "Red curry veggies",
      "price": 12.5,
      "image": "/images/carousel/red_curry_vega.png",
      "id": "red-curry-veggies",
    },
    {
      "name": "Chicken springrolls",
      "price": 6.5,
      "image": "/images/carousel/chicken_loempias.png",
      "id": "chicken-springrolls",
    }
  ]

  function productAdd(e) {
    const productId = e.target.closest('.carousel__slide').dataset.id;
    const event = new CustomEvent("product-add", {
      detail: productId,
      bubbles: true
    });
    document.dispatchEvent(event);
  }
  
  let slider = slides.map((slide) =>
      <div className="carousel__slide" data-id={slide.id} key={slide.id}>
        <img src={slide.image} className="carousel__img" alt="slide" />
        <div className="carousel__caption">
          <span className="carousel__price">`€{slide.price}`</span>
          <div className="carousel__title">{slide.name}</div>
          <button 
            type="button" 
            className="carousel__button"
            onClick={productAdd}
          >
            <img src="/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>
  );

  return (
    <>
      {slider}
    </>
  )
}

export default Carousel;
