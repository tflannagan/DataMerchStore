import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Img from "../../assets/icon90.png";

import PropTypes from "prop-types";

// Dummy product data array
const products = [
  {
    id: 1,
    name: "Data Science Tee",
    description: "T-shirt with a data science print",
    price: 29.99,
    imageUrl: Img,
  },
  {
    id: 2,
    name: "Machine Learning Tee",
    description: "T-shirt with a machine learning print",
    price: 34.99,
    imageUrl: Img,
  },
  {
    id: 3,
    name: "Dataset Sweater",
    description: "Sweater with a data science print",
    price: 119.99,
    imageUrl: Img,
  },
  {
    id: 4,
    name: "ML Shorts",
    description: "T-shirt with a machine learning print",
    price: 104.99,
    imageUrl: Img,
  },
  {
    id: 5,
    name: "DS Graphic Tee",
    description: "T-shirt with a data science print",
    price: 19.99,
    imageUrl: Img,
  },
  {
    id: 6,
    name: "ML Tee",
    description: "T-shirt with a machine learning print",
    price: 104.99,
    imageUrl: Img,
  },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
