import { Link } from "react-router-dom";
import "./NavBar.css";
import Img from "../../assets/icon72.png";
import PropTypes from "prop-types";
function NavBar({ totalCartItems }) {
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img src={Img} alt="img" />
        <h1>DataMerch</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">
              <span className="material-symbols-outlined">home</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_bag</span>
            {totalCartItems > 0 && (
              <span className="cart-count">{totalCartItems}</span>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  totalCartItems: PropTypes.number.isRequired,
};

export default NavBar;
