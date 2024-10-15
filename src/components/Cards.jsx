import React from 'react';
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
                <img
                  src={product.image || 'https://via.placeholder.com/150'}
                  alt={product.name}
                  className='card-img'
                />
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>
                  {product.price < 1000 ? 'Budget-Friendly' : product.price > 50000 ? 'Premium' : ''}
                </p>
                <p>{product.inStock > 0 ? `In Stock: ${product.inStock}` : 'Out of Stock'}</p>
                {product.inStock < 5 && product.inStock > 0 && (
                  <p style={{ color: 'red' }}>Hurry, only a few left!</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
