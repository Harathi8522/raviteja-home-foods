import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData.json";
import ProductCard from "../components/ProductCard";
import "./SweetsPage.css";  // or correct CSS fil
import "./CategoryPage.css";
import { CartContext } from "./CartContext";

function CategoryPage() {
  const { type } = useParams();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [type]);

 const categoryMap = {
  sweets: "Sweets",
  namkeen: "Namkeen",
  millets: "Millets",
  pickles: "Pickles",
  essentials: "Daily Essentials",
  "chilli-powders": "Chilli Powders",
  gifts: "Gift Packs",
};


const currentCategory = categoryMap[type];

const filteredProducts = productData.filter(
  (item) => item.category === currentCategory
);

const quotes = {
  sweets: "Sweet moments, sweeter memories ❤️",
  namkeen: "Crunch of happiness in every bite ❤️",
  pickles: "Taste that reminds home ❤️",
  "chilli-powders": "Spice of tradition ❤️",
  DailyEssentials: "Everyday purity you trust ❤️",
  gifts: "Packed with love ❤️"
};

  return (
    
    <section className={`products-page ${type}`}>

     <div className="title-wrapper">

  <h2 className="category-title">
    {type.toUpperCase()} COLLECTION
  </h2>

  <h5 className="page-subtitle">
    {quotes[type.toLowerCase()] || "Taste that reminds home ❤️"}
  </h5>

</div>





      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No products found
          </p>
        )}
      </div>

    </section>
  );
}

export default CategoryPage;