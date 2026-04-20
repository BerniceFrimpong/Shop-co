import "./Navbar.css";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">

      <div className="nav-left">
        <h1 className="logo">SHOP.CO</h1>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("products")}>Shop</li>
          <li onClick={() => scrollToSection("top-selling")}>On Sale</li>
          <li onClick={() => scrollToSection("products")}>New Arrivals</li>
          <li onClick={() => scrollToSection("brands")}>Brands</li>
        </ul>
      </div>

      <div className="nav-right">

        <div className="search-box">
          <input
            className="search"
            placeholder="Search for products..."
          />
          <FiSearch className="search-icon" />
        </div>

        <div className="nav-icons">
          <FiShoppingCart />
          <FiUser />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;