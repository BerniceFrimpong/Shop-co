import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <h2>NEW ARRIVALS</h2>

      <div className="product-grid">
        <div className="product-card">
          <div className="img"></div>
          <h4>T-shirt with Tape Details</h4>
          <p>$120</p>
        </div>

        <div className="product-card">
          <div className="img"></div>
          <h4>Skinny Fit Jeans</h4>
          <p>$240</p>
        </div>

        <div className="product-card">
          <div className="img"></div>
          <h4>Checkered Shirt</h4>
          <p>$180</p>
        </div>

        <div className="product-card">
          <div className="img"></div>
          <h4>Sleeve Striped T-shirt</h4>
          <p>$130</p>
        </div>
      </div>
    </section>
  );
};

export default Products;