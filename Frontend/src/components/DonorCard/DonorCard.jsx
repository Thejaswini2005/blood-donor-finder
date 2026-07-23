import "./DonorCard.css";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhoneAlt,
  FaTint,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function DonorCard({ donor }) {
  return (
    <div className="donor-card">

      <div className="donor-top">

        <div className="blood-circle">
          {donor.bloodGroup}
        </div>

        <div className="donor-info">

          <h3>{donor.userId?.username}</h3>

          <p>
            <FaMapMarkerAlt />
            {donor.city}, {donor.state}
          </p>

          <p>
            <FaUser />
            Age : {donor.age}
          </p>

          <p>
            <FaTint />
            Last Donation :
            {" "}
            {new Date(
              donor.lastDonationDate
            ).toLocaleDateString()}
          </p>

        </div>

      </div>

      <div className="status-row">

        <span
          className={
            donor.available
              ? "status available"
              : "status unavailable"
          }
        >
          ● {donor.available
            ? "Available"
            : "Unavailable"}
        </span>

      </div>

      <div className="button-row">

        <Link to="/request-blood">

          <button className="request-btn">
            Request Blood
          </button>

        </Link>

        <a href={`tel:${donor.mobileNumber}`}>

          <button className="call-btn">

            <FaPhoneAlt />

            Call

          </button>

        </a>

      </div>

    </div>
  );
}

export default DonorCard;