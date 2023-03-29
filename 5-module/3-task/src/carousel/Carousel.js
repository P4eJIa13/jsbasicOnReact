// import { useEffect, useState, Children, cloneElement } from "react"


export const Carousel = ({children}) => {
  // const [slides, setSlides] = useState([])
  // const [offset, setOffset] = useState(0)
  // const carouselInner = document.querySelector('.carousel__inner');
  const slides = [
    {
      "name": "Penang shrimp",
      "price": 16,
      "category": "seafood-dishes",
      "image": "penang_shrimp.png",
      "id": "penang-shrimp",
      "spiciness": 4
    },
    {
      "name": "Chicken cashew",
      "price": 14,
      "category": "chicken-dishes",
      "image": "chicken_cashew.png",
      "id": "chicken-cashew",
      "spiciness": 1
    },
    {
      "name": "Red curry veggies",
      "price": 12.5,
      "category": "vegetable-dishes",
      "image": "red_curry_vega.png",
      "id": "red-curry-veggies",
      "spiciness": 4
    },
    {
      "name": "Chicken springrolls",
      "price": 6.5,
      "category": "bits-and-bites",
      "image": "chicken_loempias.png",
      "id": "chicken-springrolls",
      "spiciness": 2
    }
  ]
  
  
  // const handlePrev = () => {
  //   setOffset((currentOffset) => {
  //     const newOffset = currentOffset + carouselInner.offsetWidth

  //     return Math.min(newOffset, 0)
  //   })
  //   console.log('handlePrev');
  // }
  // const handleNext = () => {
  //   console.log('handleNext');
  //   setOffset((currentOffset) => {
  //     const newOffset = currentOffset - carouselInner.offsetWidth

  //     const maxOffset = -(carouselInner.offsetWidth * (slides.length - 1))

  //     return Math.max(newOffset, maxOffset)
  //   })
  // }

  // useEffect(() => {
  //     setSlides(
  //       Children.map(children, slide => {
  //         return cloneElement(slide)
  //       })
  //     )
  // }, [])


  return (
    <Carousel>
      {slides.map((slide) => {
        <div class="carousel__inner">
          <div class="carousel__slide" data-id={slide.id}>
            <img src="/public/images/carousel/{slide.image}" class="carousel__img" alt="slide" />
            <div class="carousel__caption">
              <span class="carousel__price">`€{slide.price}`</span>
              <div class="carousel__title">{slide.name}</div>
            </div>
          </div>
        </div>
      })}
    </Carousel>
    
    // <div class="container" data-carousel-holder>
    //   <div class="carousel">
    //     <div class="carousel__arrow carousel__arrow_right" onClick={handleNext}>
    //       <img src='./public/images/icons/angle-icon.svg' alt="icon" />
    //     </div>
    //     <div class="carousel__arrow carousel__arrow_right" onClick={handlePrev}>
    //       <img src='./public/images/icons/angle-left-icon.svg' alt="icon" />
    //     </div>
    //     <div class="carousel__inner"
    //       style={{transform: `translateX(${offset}px)`
    //       }}
    //     >{slides}</div>
    //   </div>
    // </div>
  )
}