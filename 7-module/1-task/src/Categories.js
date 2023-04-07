import React, {useState} from 'react';

const Categories = () => {
  const categories = [
    {
      id: '',
      name: 'All'
    },
    {
      id: 'salads',
      name: 'Salads'
    },
    {
      id: 'soups',
      name: 'Soups'
    },
    {
      id: 'chicken-dishes',
      name: 'Chicken dishes'
    },
    {
      id: 'beef-dishes',
      name: 'Beef dishes'
    },
    {
      id: 'seafood-dishes',
      name: 'Seafood dishes'
    },
    {
      id: 'vegetable-dishes',
      name: 'Vegetable dishes'
    },
    {
      id: 'bits-and-bites',
      name: 'Bits and bites'
    },
    {
      id: 'on-the-side',
      name: 'On the side'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('');

  const activeRibbon = ((evt, category) => {
    evt.preventDefault();
    const ribbonItem = evt.target.closest('ribbon__item');
    setActiveCategory(category.id);
    const prevActivItem = document.querySelector('.ribbon__item_active');
    if (prevActivItem) {
      prevActivItem.classList.remove('ribbon__item_active');
    }
    if (ribbonItem) {
      ribbonItem.classList.add('ribbon__item_active');
    }
    const ribbonSelectEvent = new CustomEvent('ribbon-select', {
      detail: category.id,
      bubbles: true
    });
    document.documentElement.dispatchEvent(ribbonSelectEvent);
  })

  return (
    <>
      {categories.map(category => (
        <button 
          className={`ribbon__item ${category.id === activeCategory ? 'ribbon__item_active' : ''}`}
          data-id={category.id} 
          key={category.id} 
          onClick={(evt) => activeRibbon(evt, category)}
        >
          {category.name}
        </button>
      ))}
    </>
  )
}

export default Categories;
