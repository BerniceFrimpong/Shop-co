import { newArrivals } from "../../data";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">NEW ARRIVALS</h2>

        <div className="product-grid">
          {newArrivals.map((product) => (
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
                  {product.oldPrice && (
                    <span className="old">${product.oldPrice}</span>
                  )}
                  <span className="new">${product.price}</span>
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

export default Products;