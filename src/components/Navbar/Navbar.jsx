import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">SHOP.CO</h1>

      {/* Links */}
      <ul className="nav-links">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;