import React from 'react'
import './Cards.css'; 

export default function Cards({ ProductsData }) {
  return (
    <div className='cards'>
      {ProductsData.map((categoryData) => (
        <div key={categoryData.category}>
          <h2>{categoryData.category}</h2>
          <div className='category-cards'>
            {categoryData.products.map((product) => (
              <div key={product.id} className='cards-container'>
                <img src={product.image} alt={product.name} className='card-img' />
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
