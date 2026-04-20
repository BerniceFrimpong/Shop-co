import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useRef } from "react";

const Testimonials = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="testimonials section">
      <div className="container">

        <div className="test-header">
          <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>

          <div className="arrows">
            <button onClick={() => scroll("left")}>
              <IoArrowBack />
            </button>
            <button onClick={() => scroll("right")}>
              <IoArrowForward />
            </button>
          </div>
        </div>

        <div className="test-grid" ref={scrollRef}>

          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="user">
              <h4>Sarah M.</h4>
              <FiCheckCircle className="verified" />
            </div>
            <p>
              "I'm blown away by the quality and style of the clothes I received from Shop.co..."
            </p>
          </div>

          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="user">
              <h4>Alex K.</h4>
              <FiCheckCircle className="verified" />
            </div>
            <p>
              "Finding clothes that align with my personal style used to be a challenge..."
            </p>
          </div>

          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="user">
              <h4>James L.</h4>
              <FiCheckCircle className="verified" />
            </div>
            <p>
              "The selection of clothes is diverse and on-point with trends."
            </p>
          </div>

          <div className="test-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="user">
              <h4>Mooen</h4>
              <FiCheckCircle className="verified" />
            </div>
            <p>
              "As someone who loves unique fashion pieces, I'm thrilled with Shop.co."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;