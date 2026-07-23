import "./Hero.css";
import heroImage from "../../assets/imgs/hero.svg";
import { Link } from "react-router-dom";

function Hero() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <span className="hero-tag">
            ❤️ Every Drop Counts
          </span>

          <h1>
            Donate Blood,
            <br />
            <span>Save Lives.</span>
          </h1>

          <p>
            Blood Donor Finder connects generous donors with people who urgently
            need blood. Your one donation can save up to three lives.
          </p>

          <div className="hero-buttons">
             
            
            <Link
              to={user ? "/find-donors" : "/login"}
              state={{ from: "/find-donors" }}
              className="hero-link"
            >
              <button type="button" className="primary-btn">
                Find Donors
              </button>
            </Link>

            <Link
              to={user ? "/become-donor" : "/login"}
              state={{ from: "/become-donor" }}
              className="hero-link"
            >
              <button type="button" className="secondary-btn">
                Become Donor
              </button>
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="hero-image">

          <div className="image-bg"></div>

          <img
            src={heroImage}
            alt="Blood Donation"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;