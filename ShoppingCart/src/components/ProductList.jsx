import React from 'react'
import products from '../data/Products'
import ProductCard from './ProductCard';

export default function ProductList({onAddToCart}) {


    // Css
    const listStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
    };

    return (
        <div style={listStyle}>
            {
                products.map((product, idx) => (
                    <ProductCard key={idx} product={product} onAddToCart={onAddToCart} />
                ))
            }
        </div>
    )
}
