import "./Header.css";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="main-header">
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" className="site-logo" />
      </div>
      <div className="header-icons">
        <FaUser />
        <FaSearch />
        <FaShoppingCart />
      </div>
    </header>
  );
}

export default Header;