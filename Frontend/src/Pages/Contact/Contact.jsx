import "./Contact.css";
import contactImage from "../../assets/imgs/contact.svg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        <div className="contact-container">

          {/* Left Section */}

          <div className="contact-info">

            <span className="contact-tag">
              📞 Contact Us
            </span>

            <h1>Get In Touch</h1>

            <p>
              Have questions or need help finding blood donors?
              We'd love to hear from you. Reach out anytime.
            </p>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>Raipur, Chhattisgarh, India</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>support@blooddonorfinder.com</p>
              </div>
            </div>

          </div>

          {/* Right Section */}

          <div className="contact-right">

    <img
        src={contactImage}
        alt="Contact"
    />

    <h2>Need Help?</h2>

    <p>
        Our team is always ready to help you find blood donors
        and answer your questions. Feel free to contact us anytime.
    </p>

</div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;