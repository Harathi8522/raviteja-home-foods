import "./SweetsPage.css";
import productData from "../data/productData.json";
import ProductCard from "../components/ProductCard";

function SweetsPage() {
  const sweets = productData.filter(
    (item) => item.category === "Sweets"
  );

  return (
    <section className="products-page">
      <h2 className="page-title">SWEETS COLLECTION</h2>
      <h3 className="sub-title">
  Taste the tradition crafted with love ❤️
</h3>

      <div className="product-grid">
        {sweets.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default SweetsPage;