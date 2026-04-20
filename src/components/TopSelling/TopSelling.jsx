import "./TopSelling.css";
import { FaStar } from "react-icons/fa";

import shirt from "../../assets/images/top1.png";
import graphic from "../../assets/images/top2.png";
import shorts from "../../assets/images/top3.png";
import jeans from "../../assets/images/top4.png";

const TopSelling = () => {
  return (
    <section className="top-selling section" id="top-selling">
      <div className="container">
        <h2 className="section-title">TOP SELLING</h2>

        <div className="product-grid">

          {/* 1 ✅ FIXED (DISCOUNT HERE) */}
          <div className="product-card">
            <div
              className="img"
              style={{
                backgroundImage: `url(${shirt})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            ></div>

            <h4>VERTICAL STRIPED SHIRT</h4>

            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span>5.0/5</span>
            </div>

            <div className="price">
              <span className="new">$212</span>
              <span className="old">$232</span>
              <span className="discount">-20%</span>
            </div>
          </div>

          {/* 2 ✅ NO DISCOUNT */}
          <div className="product-card">
            <div
              className="img"
              style={{
                backgroundImage: `url(${graphic})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            ></div>

            <h4>COURAGE GRAPHIC T-SHIRT</h4>

            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar />
              <span>4.0/5</span>
            </div>

            <div className="price">
              <span className="new">$145</span>
            </div>
          </div>

          {/* 3 */}
          <div className="product-card">
            <div
              className="img"
              style={{
                backgroundImage: `url(${shorts})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            ></div>

            <h4>LOOSE FIT BERMUDA SHORTS</h4>

            <div className="rating">
              <FaStar /><FaStar /><FaStar />
              <span>3.0/5</span>
            </div>

            <div className="price">
              <span className="new">$80</span>
            </div>
          </div>

          {/* 4 */}
          <div className="product-card">
            <div
              className="img"
              style={{
                backgroundImage: `url(${jeans})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            ></div>

            <h4>FADED SKINNY JEANS</h4>

            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar />
              <span>4.5/5</span>
            </div>

            <div className="price">
              <span className="new">$210</span>
            </div>
          </div>

        </div>

        <button className="btn-outline">View All</button>
      </div>
    </section>
  );
};

export default TopSelling;