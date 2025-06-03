// import React from "react";

export default function Cart({ cartItems, onRemoveFromCart, }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // css
  const cartStyle = {
    position: "fixed",
    right: "0",
    top: "0",
    width: "300px",
    height: "100vh",
    backgroundColor: "#4b2828",
    borderLeft: "1px solid #ccc",
    padding: "20px",
    overflowY: "auto",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  };


  return (
    <div style={cartStyle}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart Is Empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={itemStyle}>
            <img src={item.image} alt={item.name} width="50" />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>

              <br />
              <button onClick={() => onRemoveFromCart(index)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <hr />
      <h3>Total: {total}</h3>
    </div>
  );
}

// css
