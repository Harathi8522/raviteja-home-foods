import "./FeaturedProduct.css";

import sweetImg from "../assets/images/category-sweets.png";
import namkeenImg from "../assets/images/category-namkeen.png";
import pickleImg from "../assets/images/category-pickles.png";
import essentialsImg from "../assets/images/category-essentials.png";


function FeaturedProducts() {
  const products = [
    {
      name: "Premium Sweets Box",
      price: "₹499",
      image: sweetImg,
    },
    {
      name: "Crunchy Namkeen Mix",
      price: "₹299",
      image: namkeenImg,
    },
    {
      name: "Traditional Pickles",
      price: "₹349",
      image: pickleImg,
    },
    {
      name: "Daily Essentials Combo",
      price: "₹399",
      image: essentialsImg,
    },
   
  ];

  return (
    <section className="featured">
      <div className="featured-head">
        <p>BEST SELLERS</p>
        <h2>Taste Loved By Every Family</h2>
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="product-info">
              <h3>{item.name}</h3>
              

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;