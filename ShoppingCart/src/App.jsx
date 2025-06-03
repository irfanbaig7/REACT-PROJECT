import React, { useState } from 'react'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'


export default function App() {

  const [cartItems, setCartItems] = useState([])


  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    setCartItems([...cartItems, product])

  }

  const handleRemove = (index) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
  }




  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Shoping Cart</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemove} />
    </div>
  )
}
