import ShoppingCartItem from "../ShoppingCart/ShoppingCartItem";
import "./ShoppingCart.css";

const cartItems = [
  {
    id: 1,
    name: "Data Science Tee",
    price: 29.99,
    quantity: 1,
    imageUrl: "/assets/fakepicture1.png",
  },
  {
    id: 2,
    name: "Machine Learning Tee",
    price: 34.99,
    quantity: 2,
    imageUrl: "assets/fakepicture1.png",
  },
];

function ShoppingCart() {
  const calculateTotal = (items) => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${calculateTotal(cartItems)}</strong>
      </div>
    </div>
  );
}

export default ShoppingCart;
