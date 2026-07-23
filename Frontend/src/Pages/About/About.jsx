import "./About.css";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaUsers,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

import aboutImage from "../../assets/imgs/hero.svg";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">

        <div className="about-content">

          <span className="about-tag">
            ❤️ About Blood Donor Finder
          </span>

          <h1>
            Connecting Donors,
            <br />
            <span>Saving Lives.</span>
          </h1>

          <p>
            Blood Donor Finder is a platform that connects voluntary blood
            donors with patients in need. Our mission is to make blood
            donation faster, safer, and more accessible during emergencies.
          </p>

          <Link to="/become-donor">
            <button className="about-btn">
              Become a Donor
            </button>
          </Link>

        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission">

        <div className="card">

          <h2>Our Mission</h2>

          <p>
            To connect blood donors with patients quickly through a secure,
            simple and reliable platform.
          </p>

        </div>

        <div className="card">

          <h2>Our Vision</h2>

          <p>
            To ensure that no patient suffers due to the unavailability of
            blood by building a strong donor community.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaUsers />
            <h3>Verified Donors</h3>
            <p>Connect with genuine registered donors.</p>
          </div>

          <div className="feature-card">
            <FaSearch />
            <h3>Quick Search</h3>
            <p>Find blood donors by group and location.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt />
            <h3>Secure Platform</h3>
            <p>Your information remains protected.</p>
          </div>

          <div className="feature-card">
            <FaHeartbeat />
            <h3>Save Lives</h3>
            <p>Every donation can save up to three lives.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Registered Donors</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Blood Requests</p>
        </div>

        <div className="stat-box">
          <h2>300+</h2>
          <p>Lives Helped</p>
        </div>

      </section>

    </div>
  );
}

export default About;