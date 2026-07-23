import "./EmergencyBanner.css";
import { Link } from "react-router-dom";
import { FaTint } from "react-icons/fa";

function EmergencyBanner() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="emergency-banner">

      <div className="banner-container">

        <div className="banner-content">

          <div className="banner-icon">
            <FaTint />
          </div>

          <div>

            <h2>Need Blood Urgently?</h2>

            <p>
              Connect with nearby verified donors within minutes.
              Create an emergency blood request and save precious time.
            </p>

          </div>

        </div>

        <Link to={user ? "/request-blood" : "/login"}
              state={{ from: "/request-blood" }}
        >
              
          <button className="banner-btn">
            Request Blood
          </button>
        </Link>

      </div>

    </section>
  );
}

export default EmergencyBanner;