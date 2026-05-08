import "./AllProducts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API call simulation. Replace this with actual fetch or axios request.
    const fetchProducts = async () => {
      const data = [
        { name: "Assorted Sweets", price: "195", image: "/assets/images/gulab.jpg" },
        { name: "4pcs Gift Box", price: "140", image: "/assets/images/jilebi.jpg" },
        { name: "Agra Pan", price: "175", image: "/assets/images/mothichur.jpg" },
        { name: "Kalakand", price: "210", image: "/assets/images/kalakand.jpg" },
        // Add more products as per backend data
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="all-products">
      <h2>All Products</h2>
      <div className="all-product-grid">
        {products.map((item, index) => (
          <div className="all-product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">Rs. {item.price}.00</p>
            {/* You can add more details like an Add to Cart button or quantity selector here if needed */}
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Home</Link>
    </section>
  );
}

export default AllProducts;