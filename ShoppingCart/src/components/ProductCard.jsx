import React from 'react'

export default function ProductCard({product, onAddToCart}) {


    const cardStyle = {
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "200px",
        textAlign: "center",
    };

    return (
        <div style={cardStyle}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}




