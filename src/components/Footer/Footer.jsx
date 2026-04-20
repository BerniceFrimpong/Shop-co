import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiApplepay, SiGooglepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>

        <div className="newsletter-input">
          <input placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-content">

        <div className="footer-brand">
          <h2>SHOP.CO</h2>
          <p>
            We have clothes that suits your style and which you’re proud to wear.
            From women to men.
          </p>

          <div className="socials">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        <div>
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>

        <div>
          <h4>HELP</h4>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>FAQ</h4>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>

        <div>
          <h4>RESOURCES</h4>
          <p>Free eBooks</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="payments">
          <SiVisa />
          <SiMastercard />
          <SiPaypal />
          <SiApplepay />
          <SiGooglepay />
        </div>
      </div>

    </footer>
  );
};

export default Footer;