import "./Navbar.css";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
      // If we are not on the casual page, navigate there to show results
      if (window.location.pathname !== "/casual") {
        navigate(`/casual?search=${encodeURIComponent(value)}`);
      }
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

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
        <h1 className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>SHOP.CO</h1>

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
            value={searchQuery}
            onChange={handleSearchChange}
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