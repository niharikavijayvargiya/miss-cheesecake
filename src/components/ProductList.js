import React from 'react';

function ProductList({ products, addToCart, removeFromCart, cart }) {
  return (
    <div className="product-list">
      <h2>Our Cakes</h2>
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="product-controls">
                <button className="add-button" onClick={() => addToCart(product)}>+</button>
                <span>{cartItem ? cartItem.quantity : 0}</span>
                <button className="remove-button" onClick={() => removeFromCart(product.id)}>-</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
