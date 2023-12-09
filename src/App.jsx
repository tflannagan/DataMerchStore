import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const found = prevItems.find((item) => item.id === product.id);
      if (found) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleCheckout = () => {
    alert("You've checked out!");
    setCartItems([]);
  };

  // Calculate the total number of items in the cart
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="App">
      <NavBar totalCartItems={totalCartItems} />
      <main>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                onCheckout={handleCheckout}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
