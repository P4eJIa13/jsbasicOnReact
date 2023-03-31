import React, { useContext } from 'react';
import './Carousel.css';
import { SliderContext } from './Carousel';


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
];

export default function Products() {
  // const [slidesArr] = useState(slides);
  
  const { slideNumber, slides} = useContext(SliderContext);
  return (
    <div 
      class="carousel__inner"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {slides.map((slide) => (
        <div className="carousel__slide" data-id={slide.id} key={slide.id}>
          <img src={slide.image} className="carousel__img" alt="slide" />
          <div className="carousel__caption">
            <span className="carousel__price">`€{slide.price}`</span>
            <div className="carousel__title">{slide.name}</div>
            <button type="button" className="carousel__button">
              <img src="/images/icons/plus-icon.svg" alt="icon" />
            </button>
          </div>
        </div>
        ))}
    </div>
  )
}
