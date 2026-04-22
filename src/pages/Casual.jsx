import { casualProducts } from "../data";
import "./Casual.css";
import { FaStar } from "react-icons/fa";
import {
  FiChevronRight,
  FiChevronLeft,
  FiSliders,
  FiChevronUp,
} from "react-icons/fi";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

const Casual = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // FILTER PRODUCTS
  const filteredProducts = casualProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="casual-page">
      {/* BREADCRUMBS */}
      <div className="breadcrumb">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>{" "}
        <span>&gt;</span> Casual
      </div>

      <div className="casual-layout">
        {/* SIDEBAR */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            <FiSliders />
          </div>

          <div className="filter-section">
            <ul className="category-list">
              <li>T-shirts <FiChevronRight /></li>
              <li>Shorts <FiChevronRight /></li>
              <li>Shirts <FiChevronRight /></li>
              <li>Hoodie <FiChevronRight /></li>
              <li>Jeans <FiChevronRight /></li>
            </ul>
          </div>

          <div className="filter-section">
            <h4>Price <FiChevronUp /></h4>
            <div className="price-range">
              <input type="range" className="price-slider" min="50" max="250" defaultValue="200" />
              <div className="price-values">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Colors <FiChevronUp /></h4>
            <div className="color-grid">
              <div className="color-circle" style={{ background: "#00C129" }}></div>
              <div className="color-circle" style={{ background: "#F50606" }}></div>
              <div className="color-circle" style={{ background: "#F5DD06" }}></div>
              <div className="color-circle" style={{ background: "#F57906" }}></div>
              <div className="color-circle" style={{ background: "#06CAF5" }}></div>
              <div className="color-circle active" style={{ background: "#063AF5" }}>
                <div style={{ width: 12, height: 12, border: "2px solid white", borderRadius: "50%" }}></div>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Size <FiChevronUp /></h4>
            <div className="size-grid">
              <button className="size-btn">Small</button>
              <button className="size-btn">Medium</button>
              <button className="size-btn active">Large</button>
            </div>
          </div>

          <button className="apply-btn">Apply Filter</button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="casual-content">
          <div className="content-header">
            <h2>Casual</h2>
            <div className="header-right">
              {searchQuery
                ? `Showing ${filteredProducts.length} results for "${searchQuery}"`
                : `Showing 1-${filteredProducts.length} of ${casualProducts.length} Products`}
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="casual-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>

                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                </Link>

                <h4>{product.title}</h4>

                <div className="stars">
                  {Array(product.stars)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  <span>{product.ratingText}</span>
                </div>

                <div className="price">
                  <span className="new-price">${product.price}</span>

                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice}</span>
                  )}

                  {product.discount && (
                    <span className="discount">{product.discount}</span>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <button className="page-btn">
              <FiChevronLeft /> Previous
            </button>

            <div className="page-numbers">
              <span className="page-num active">1</span>
              <span className="page-num">2</span>
            </div>

            <button className="page-btn">
              Next <FiChevronRight />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Casual;