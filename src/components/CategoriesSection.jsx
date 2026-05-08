import "./CategoriesSection.css";
import { Link } from "react-router-dom";

import sweetImg from "../assets/images/category-sweets.png";
import namkeenImg from "../assets/images/category-namkeen.png";
import pickleImg from "../assets/images/category-pickles.png";
import chilliImg from "../assets/images/category-chilli-powders.png";
import essentialsImg from "../assets/images/category-essentials.png";
import giftImg from "../assets/images/category-gift.png";

function CategoriesSection() {

  const categories = [

    {
      title: "Sweets",
      image: sweetImg,
      slug: "sweets"
    },

    {
      title: "Namkeen",
      image: namkeenImg,
      slug: "namkeen"
    },

    {
      title: "Pickles",
      image: pickleImg,
      slug: "pickles"
    },

    {
      title: "Chilli Powders",
      image: chilliImg,
      slug: "chilli-powders"
    },

    {
      title: "Daily Essentials",
      image: essentialsImg,
      slug: "essentials"
    },

    {
      title: "Gift Packs",
      image: giftImg,
      slug: "gifts"
    }

  ];

  return (

    <section className="categories">

      <div className="categories-head">

        <p>
          OUR COLLECTIONS
        </p>

        <h2>
          Recipes That Carry Memories
        </h2>

      </div>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div
            key={index}
            className="category-card"
            style={{
              backgroundImage:
              `url(${item.image})`
            }}
          >

            <div className="category-overlay">

              <h3>
                {item.title}
              </h3>

              <Link
                to={`/category/${item.slug}`}
              >

                <button className="shop-btn">

                  Shop Now

                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default CategoriesSection;
