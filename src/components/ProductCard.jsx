import { useState, useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "./CartContext";

function ProductCard({ item }) {

  const [qty, setQty] = useState(1);

  const [weight, setWeight] = useState("250g");

  const [added, setAdded] = useState(false);

  const { addToCart } =
    useContext(CartContext);

  return (

    <div className="product-card">

      <img
        src={item.image}
        alt={item.name}
      />

      <h3>{item.name}</h3>

      <p className="price">
        ₹{item.prices[weight]}
      </p>

      <select
        className="weight-select"
        value={weight}
        onChange={(e) =>
          setWeight(e.target.value)
        }
      >

        <option value="250g">
          250g
        </option>

        <option value="500g">
          500g
        </option>

        <option value="1kg">
          1kg
        </option>

      </select>

      <div className="cart-row">

        <div className="qty">

          <button
            onClick={() =>
              setQty(qty > 1 ? qty - 1 : 1)
            }
          >
            -
          </button>

          <span>{qty}</span>

          <button
            onClick={() =>
              setQty(qty + 1)
            }
          >
            +
          </button>

        </div>

        <button
          className={`cart-btn ${added ? "added" : ""}`}

          onClick={() => {

            addToCart({
              ...item,
              qty,
              weight,
            });

            setAdded(true);

            setTimeout(() => {
              setAdded(false);
            }, 2000);

          }}
        >

          {added
            ? "ADDED ✓"
            : "ADD TO CART"}

        </button>

      </div>

    </div>
  );
}

export default ProductCard;