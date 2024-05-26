import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const products = [
  { id: 1, name: 'Chocolate Cake', description: 'Rich and creamy chocolate cake.', price: 300, image: 'images/chocolate_cake.jpg' },
  { id: 2, name: 'Kitkat Cake', description: 'Delicious Kitkat bars on a cake.', price: 350, image: 'images/kitkat_cake.jpg' },
  { id: 3, name: 'Butterscotch Cake', description: 'Smooth butterscotch flavor.', price: 320, image: 'images/butterscotch_cake.jpg' },
  { id: 4, name: 'Cheesecake', description: 'Classic creamy cheesecake.', price: 400, image: 'images/cheesecake.jpg' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <div className="app">
      <header>
        <h1>Miss Cheesecake and Co.</h1>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        <Cart cart={cart} />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
