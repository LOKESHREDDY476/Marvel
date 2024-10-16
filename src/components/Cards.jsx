import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
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
                {/* Wrap product details with a Link */}
                <Link to={`/${categoryData.category.toLowerCase()}/${product.id}`}>
                  <img src={product.image} alt={product.name} className='card-img' />
                  <h3>{product.name}</h3>
                  {/* <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
