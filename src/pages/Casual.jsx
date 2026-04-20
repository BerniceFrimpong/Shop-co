import { casualProducts } from "../data";
import "./Casual.css";
import { FaStar } from "react-icons/fa";
import {
  FiChevronRight,
  FiChevronLeft,
  FiSliders,
  FiChevronUp,
} from "react-icons/fi";
import { useSearchParams, Link } from "react-router-dom";

const Casual = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // FILTER PRODUCTS
  const filteredProducts = casualProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery),
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
              <li>
                T-shirts <FiChevronRight />
              </li>
              <li>
                Shorts <FiChevronRight />
              </li>
              <li>
                Shirts <FiChevronRight />
              </li>
              <li>
                Hoodie <FiChevronRight />
              </li>
              <li>
                Jeans <FiChevronRight />
              </li>
            </ul>
          </div>

          <div className="filter-section">
            <h4>
              Price <FiChevronUp />
            </h4>
            <div className="price-range">
              <input
                type="range"
                className="price-slider"
                min="50"
                max="250"
                defaultValue="200"
              />
              <div className="price-values">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>
              Colors <FiChevronUp />
            </h4>
            <div className="color-grid">
              <div
                className="color-circle"
                style={{ background: "#00C129" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#F50606" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#F5DD06" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#F57906" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#06CAF5" }}
              ></div>
              <div
                className="color-circle active"
                style={{ background: "#063AF5" }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    border: "2px solid white",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                className="color-circle"
                style={{ background: "#7D06F5" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#F506A4" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#FFFFFF" }}
              ></div>
              <div
                className="color-circle"
                style={{ background: "#000000" }}
              ></div>
            </div>
          </div>

          <div className="filter-section">
            <h4>
              Size <FiChevronUp />
            </h4>
            <div className="size-grid">
              <button className="size-btn">XX-Small</button>
              <button className="size-btn">X-Small</button>
              <button className="size-btn">Small</button>
              <button className="size-btn">Medium</button>
              <button className="size-btn active">Large</button>
              <button className="size-btn">X-Large</button>
              <button className="size-btn">XX-Large</button>
              <button className="size-btn">3X-Large</button>
              <button className="size-btn">4X-Large</button>
            </div>
          </div>

          <div className="filter-section">
            <h4>
              Dress Style <FiChevronUp />
            </h4>
            <ul className="style-list">
              <li>
                Casual <FiChevronRight />
              </li>
              <li>
                Formal <FiChevronRight />
              </li>
              <li>
                Party <FiChevronRight />
              </li>
              <li>
                Gym <FiChevronRight />
              </li>
            </ul>
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
                : `Showing 1-${filteredProducts.length} of ${casualProducts.length} Products`}{" "}
              Sort by:
              <select>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* <div className="casual-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>

                <h4>{product.title.toUpperCase()}</h4>

                <div className="rating">
                  {[...Array(product.stars)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span>{product.ratingText}</span>
                </div>

                <div className="price">
                  <span className="new">${product.price}</span>
                  {product.oldPrice && <span className="old">${product.oldPrice}</span>}
                  {product.discount && <span className="discount">{product.discount}</span>}
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div style={{ gridColumn: "span 3", textAlign: "center", padding: "40px", color: "#666" }}>
                No products found matching your search.
              </div>
            )}
          </div> */}

          <div className="pagination">
            <button className="page-btn">
              <FiChevronLeft /> Previous
            </button>
            <div className="page-numbers">
              <span className="page-num active">1</span>
              <span className="page-num">2</span>
              <span className="page-num">3</span>
              <span className="page-num">...</span>
              <span className="page-num">8</span>
              <span className="page-num">9</span>
              <span className="page-num">10</span>
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
