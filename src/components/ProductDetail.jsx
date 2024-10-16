// ProductDetail.jsx
import React from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import data from '../data';

export default function ProductDetail() {
    const { category, id } = useParams();

    // Find the category and product by id
    const categoryData = data.find(cat => cat.category.toLowerCase() === category.toLowerCase());
    const product = categoryData.products.find(prod => prod.id === parseInt(id));

    return (
        <div className="product-detail">
            {product ? (
                <div>
                    <img src={product.image} alt={product.name} style={{ width: '300px' }} />
                    <h2>{product.name}</h2>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>

                    <p>
                        {product.price < 1000 ? 'Budget-Friendly' : product.price > 50000 ? 'Premium' : ''}
                    </p>
                    <p>{product.inStock > 0 ? `In Stock: ${product.inStock}` : 'Out of Stock'}</p>
                    {product.inStock < 5 && product.inStock > 0 && (
                        <p style={{ color: 'red' }}>Hurry, only a few left!</p>
                    )}
                    <p>Description: {product.description}</p> {/* Add description in data */}
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}
