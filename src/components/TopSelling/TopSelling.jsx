import { topSelling } from "../../data";
import "./TopSelling.css";
import { FaStar } from "react-icons/fa";

const TopSelling = () => {
  return (
    <section className="top-selling section" id="top-selling">
      <div className="container">
        <h2 className="section-title">TOP SELLING</h2>

        <div className="product-grid">
          {topSelling.map((product) => (
            <div className="product-card" key={product.id}>
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
                {product.oldPrice && <span className="old">${product.oldPrice}</span>}
                {product.discount && <span className="discount">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>

        <button className="btn-outline">View All</button>
      </div>
    </section>
  );
};

export default TopSelling;