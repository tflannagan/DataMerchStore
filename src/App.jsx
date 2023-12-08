import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product is already in the cart
      const isProductInCart = prevItems.find((item) => item.id === product.id);
      if (isProductInCart) {
        // If it is, increase the quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not, add the product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<ShoppingCart cartItems={cartItems} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
