import { topSelling } from "../../data";
import "./TopSelling.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopSelling = () => {
  return (
    <section className="top-selling section" id="top-selling">
      <div className="container">
        <h2 className="section-title">TOP SELLING</h2>

        <div className="product-grid">
          {topSelling.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-card">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    cursor: "pointer",
                  }}
                ></div>

                <h4>{product.title}</h4>

                <div className="rating">
                  {[...Array(product.stars)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span>{product.ratingText}</span>
                </div>

                <div className="price">
                  {<span className="new">${product.price}</span>}
                  {product.oldPrice && (
                    <span className="old">${product.oldPrice}</span>
                  )}
                  {product.discount && (
                    <span className="discount">{product.discount}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="btn-outline">View All</button>
      </div>
    </section>
  );
};

export default TopSelling;