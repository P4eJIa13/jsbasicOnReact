
const Carousel = () => {
  const slides = [
    {
      "name": "Penang shrimp",
      "price": 16,
      "category": "seafood-dishes",
      "image": "/images/carousel/penang_shrimp.png",
      "id": "penang-shrimp",
      "spiciness": 4
    },
    {
      "name": "Chicken cashew",
      "price": 14,
      "category": "chicken-dishes",
      "image": "/images/carousel/chicken_cashew.png",
      "id": "chicken-cashew",
      "spiciness": 1
    },
    {
      "name": "Red curry veggies",
      "price": 12.5,
      "category": "vegetable-dishes",
      "image": "/images/carousel/red_curry_vega.png",
      "id": "red-curry-veggies",
      "spiciness": 4
    },
    {
      "name": "Chicken springrolls",
      "price": 6.5,
      "category": "bits-and-bites",
      "image": "/images/carousel/chicken_loempias.png",
      "id": "chicken-springrolls",
      "spiciness": 2
    }
  ]
  
  let slider = slides.map((slide) =>
      <div className="carousel__slide" data-id={slide.id}>
        <img src={slide.image} class="carousel__img" alt="slide" />
        <div className="carousel__caption">
          <span className="carousel__price">`€{slide.price}`</span>
          <div className="carousel__title">{slide.name}</div>
        </div>
      </div>
  );

  return (
    <div className="carousel__inner">
      {slider}
    </div>

  )
}

export default Carousel;
