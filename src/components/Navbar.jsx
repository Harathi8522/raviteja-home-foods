import "./Navbar.css";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "./CartContext";

function Navbar() {

  const { cartItems } =
    useContext(CartContext);

  return (

    <nav className="navbar">

      <Link to="/category/sweets">
        SWEETS
      </Link>

      <Link to="/category/namkeen">
        NAMKEEN
      </Link>

      <Link to="/category/pickles">
        PICKLES
      </Link>

      <Link to="/category/essentials">
        DAILY ESSENTIALS
      </Link>

      <Link to="/category/chilli-powders">
        CHILLI POWDERS
      </Link>

      <Link to="/category/gifts">
        GIFT PACKS
      </Link>

      {/* CART */}

      <Link
        to="/cart"
        className="cart-icon"
      >
        🛒 Cart ({cartItems.length})
      </Link>

    </nav>
  );
}

export default Navbar;