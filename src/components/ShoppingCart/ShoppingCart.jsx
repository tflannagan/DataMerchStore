import PropTypes from "prop-types";
import "./ShoppingCart.css";

function ShoppingCart({ cartItems, removeFromCart, onCheckout }) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="checkout-info">
            <h3>Checkout</h3>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={onCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default ShoppingCart;
