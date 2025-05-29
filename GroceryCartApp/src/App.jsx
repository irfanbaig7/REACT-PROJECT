import React, { useState } from 'react'

export default function App() {

  const groceryItems = [
    { name: "Dell XPS", price: 119999 },
    { name: "Realme Pad", price: 17999 },
    { name: "Lenovo ThinkPad", price: 82999 },
    { name: "Canon DSLR", price: 45999 },
    { name: "GoPro Hero 10", price: 38500 },
    { name: "Alexa Echo", price: 7499 },
    { name: "Chromecast", price: 3999 },
    { name: "Fire TV Stick", price: 2999 },
    { name: "Bluetooth Mouse", price: 999 }
  ];

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }


  const removeFromCart = (indexToRemove) => {
    const updateCartItem = cart.filter((_, index) => index !== indexToRemove)
    setCart(updateCartItem)
  }



  // Search Funcationlity

  const [searchTerm, setSearchTerm] = useState("")

  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
    <div>

      <h1>🛒 Grocery Store</h1>

      <h2>Items:</h2>
      {
        groceryItems.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => addToCart(item)} >Add-to-CART</button>
          </div>
        ))
      }



      <h2>🛍️ Cart: </h2>

      <input type="text" placeholder='Search IN Cart' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {
        cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <ul>
            {
              filteredCart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  )
}

