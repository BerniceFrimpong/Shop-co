import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>

        <p>
          Browse through our diverse range of carefully crafted garments,
          designed to bring out your individuality.
        </p>

        <button className="hero-btn">Shop Now</button>

        <div className="hero-stats">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
       <img
  src="https://images.unsplash.com/photo-1520975922284-9e0ce8274d6b"
  alt="model"
/>
      </div>
    </section>
  );
};

export default Hero;