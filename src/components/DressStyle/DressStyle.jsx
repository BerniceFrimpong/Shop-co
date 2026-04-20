import "./DressStyle.css";

import casual from "../../assets/images/casual.png";
import formal from "../../assets/images/formal.png";
import party from "../../assets/images/party.png";
import gym from "../../assets/images/gym.png";

const DressStyle = () => {
  return (
    <section className="dress-style section">
      <div className="container">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>

        <div className="style-grid">

          <div
            className="style-card"
            style={{ backgroundImage: `url(${casual})` }}
          >
            <h3>Casual</h3>
          </div>

          <div
            className="style-card"
            style={{ backgroundImage: `url(${formal})` }}
          >
            <h3>Formal</h3>
          </div>

          <div
            className="style-card"
            style={{ backgroundImage: `url(${party})` }}
          >
            <h3>Party</h3>
          </div>

          <div
            className="style-card"
            style={{ backgroundImage: `url(${gym})` }}
          >
            <h3>Gym</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DressStyle;