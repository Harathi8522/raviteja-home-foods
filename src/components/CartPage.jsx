import { useContext } from "react";
import "./CartPage.css";
import { CartContext } from "./CartContext";

function CartPage() {

  const { cartItems, removeFromCart } =
    useContext(CartContext);

  // 🔥 SUBTOTAL
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.prices[item.weight] * item.qty,
    0
  );

  return (
    <section className="cart-page">

      <h1 className="cart-title">
        SHOPPING CART
      </h1>

      <div className="cart-container">

        {/* LEFT */}
        <div className="cart-items">

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-card" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>{item.weight}</p>

                  <h4>
                    ₹
                    {item.prices[item.weight]}
                  </h4>

                  <p>Qty: {item.qty}</p>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.weight
                      )
                    }
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))
          )}

        </div>

        {/* RIGHT */}
        <div className="cart-summary">

          <h2>
            SUBTOTAL:
            ₹{subtotal}
          </h2>

          <button className="checkout-btn">
            CHECK OUT
          </button>

        </div>

      </div>

    </section>
  );
}

export default CartPage;