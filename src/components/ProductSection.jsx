import "./ProductSection.css";
import { Link } from "react-router-dom";
import productData from "../data/productData.json";
import ProductCard from "./ProductCard";

function ProductSection() {

  const newArrivals = productData.filter(
    (item) => item.category === "New Arrivals"
  );

  return (

    <section className="products">

      <div className="products-container">

        {/* HEADER */}
        <div className="products-head">

          <h2>NEW ARRIVALS</h2>

          <Link
            to="/all-products"
            className="view-all-link"
          >
            VIEW ALL
          </Link>

        </div>

        {/* PRODUCTS */}
        <div className="product-grid">

          {newArrivals.map((item) => (

            <ProductCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default ProductSection;