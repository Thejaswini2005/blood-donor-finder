import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">
            🩸 Blood<span>Link</span>
          </h2>

          <p>
            Connecting blood donors and recipients through technology.
            Together, we can save lives by making blood donation faster,
            easier, and more accessible.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/find-donors">Find Donors</a></li>
            <li><a href="/become-donor">Become Donor</a></li>
            <li><a href="/request-blood">Request Blood</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Raipur, Chhattisgarh, India</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@bloodlink.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 BloodLink. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;