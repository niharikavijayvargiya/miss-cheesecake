import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ${item.price} x {item.quantity}</span>
          </div>
        ))
      )}
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default Cart;
