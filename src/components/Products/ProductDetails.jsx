import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { casualProducts, newArrivals, topSelling } from "../../data";
import "./ProductDetails.css";

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    verified: true,
    stars: 5,
    text: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: "Posted on August 14, 2023",
  },
  {
    id: 2,
    name: "Alex M.",
    verified: true,
    stars: 4,
    text: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    date: "Posted on August 15, 2023",
  },
  {
    id: 3,
    name: "Ethan R.",
    verified: true,
    stars: 5,
    text: '"This t-shirt is a must-have for anyone who appreciates good design. The meticulous attention to detail pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
    date: "Posted on August 16, 2023",
  },
  {
    id: 4,
    name: "Olivia P.",
    verified: true,
    stars: 4,
    text: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also looks great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
    date: "Posted on August 17, 2023",
  },
  {
    id: 5,
    name: "Liam K.",
    verified: true,
    stars: 5,
    text: "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"",
    date: "Posted on August 18, 2023",
  },
  {
    id: 6,
    name: "Ava H.",
    verified: true,
    stars: 4,
    text: "\"I'm not just wearing a t-shirt, I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
    date: "Posted on August 19, 2023",
  },
];

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  const colors = ["#314F79", "#2D4A1E", "#273348"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Related products (exclude current)
  const allProducts = [...newArrivals, ...topSelling, ...casualProducts];
  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-details">
      {/* TOP SECTION */}
      <div className="pd-top">
        {/* THUMBNAILS */}
        <div className="pd-thumbnails">
          {[product.image, product.image, product.image].map((img, i) => (
            <div
              key={i}
              className={`pd-thumb ${activeThumb === i ? "active" : ""}`}
              onClick={() => setActiveThumb(i)}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#f0f0f0",
              }}
            ></div>
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div
          className="pd-main-image"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#f0f0f0",
          }}
        ></div>

        {/* INFO */}
        <div className="pd-info">
          <h1>{product.title.toUpperCase()}</h1>

          <div className="pd-rating">
            {[...Array(product.stars)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span>{product.ratingText}</span>
          </div>

          <div className="pd-price">
            <span className="new">${product.price}</span>
            {product.oldPrice && (
              <span className="old">${product.oldPrice}</span>
            )}
            {product.discount && (
              <span className="discount">{product.discount}</span>
            )}
          </div>

          <p className="pd-desc">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <hr className="pd-divider" />

          {/* COLORS */}
          <div className="pd-section">
            <p className="pd-label">Select Colors</p>
            <div className="pd-colors">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className={`pd-color-circle ${selectedColor === i ? "active" : ""}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(i)}
                >
                  {selectedColor === i && <div className="check">✓</div>}
                </div>
              ))}
            </div>
          </div>

          <hr className="pd-divider" />

          {/* SIZES */}
          <div className="pd-section">
            <p className="pd-label">Choose Size</p>
            <div className="pd-sizes">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`pd-size-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="pd-divider" />

          {/* QUANTITY + ADD TO CART */}
          <div className="pd-actions">
            <div className="pd-quantity">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <button className="pd-add-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="pd-tabs">
        {["details", "reviews", "faqs"].map((tab) => (
          <button
            key={tab}
            className={`pd-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "details" && "Product Details"}
            {tab === "reviews" && "Rating & Reviews"}
            {tab === "faqs" && "FAQs"}
          </button>
        ))}
      </div>

      {/* REVIEWS */}
      {activeTab === "reviews" && (
        <div className="pd-reviews-section">
          <div className="reviews-header">
            <h3>
              All Reviews <span>({reviews.length})</span>
            </h3>
            <div className="reviews-actions">
              <button className="reviews-filter-btn">⚙ Latest ▾</button>
              <button className="write-review-btn">Write a Review</button>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-top">
                  <div className="review-stars">
                    {[...Array(review.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="review-dots">···</span>
                </div>
                <div className="reviewer-name">
                  {review.name}{" "}
                  {review.verified && <span className="verified-badge">✓</span>}
                </div>
                <p className="review-text">{review.text}</p>
                <p className="review-date">{review.date}</p>
              </div>
            ))}
          </div>

          <button className="load-more-btn">Load More Reviews</button>
        </div>
      )}

      {activeTab === "details" && (
        <div className="pd-tab-content">
          <p>
            Made from 100% premium cotton. Machine washable. Available in
            multiple sizes.
          </p>
        </div>
      )}

      {activeTab === "faqs" && (
        <div className="pd-tab-content">
          <p>
            <strong>What is the return policy?</strong>
            <br />
            We accept returns within 30 days of purchase.
          </p>
          <br />
          <p>
            <strong>How long does shipping take?</strong>
            <br />
            Standard shipping takes 5-7 business days.
          </p>
        </div>
      )}

      {/* YOU MIGHT ALSO LIKE */}
      <div className="pd-related">
        <h2>YOU MIGHT ALSO LIKE</h2>
        <div className="related-grid">
          {related.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-card">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "#f0f0f0",
                  }}
                ></div>
                <h4>{p.title}</h4>
                <div className="rating">
                  {[...Array(p.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span>{p.ratingText}</span>
                </div>
                <div className="price">
                  <span className="new">${p.price}</span>
                  {p.oldPrice && <span className="old">${p.oldPrice}</span>}
                  {p.discount && <span className="discount">{p.discount}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
