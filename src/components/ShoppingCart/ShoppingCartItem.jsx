import "./ShoppingCartItem.css";
import PropTypes from "prop-types";

function ShoppingCartItem({ item, removeItem, updateQuantity }) {
  const handleQuantityChange = (amount) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="shopping-cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button onClick={() => removeItem(item.id)} className="remove-item">
          Remove
        </button>
      </div>
    </div>
  );
}

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
