import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-left">
          <h1>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          {/* ✅ UPDATED BUTTON */}
          <button className="btn" onClick={() => navigate("/casual")}>
            Shop Now
          </button>

          <div className="hero-stats">

            <div className="stat">
              <h2>200+</h2>
              <p>International Brands</p>
            </div>

            <div className="divider"></div>

            <div className="stat">
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>

            <div className="divider"></div>

            <div className="stat">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;