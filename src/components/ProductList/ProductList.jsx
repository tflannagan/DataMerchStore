import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

// Dummy product data array
const products = [
  {
    id: 1,
    name: "Data Science Tee",
    description: "T-shirt with a data science print",
    price: 29.99,
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Machine Learning Tee",
    description: "T-shirt with a machine learning print",
    price: 34.99,
    imageUrl: "/path/to/image2.jpg",
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
