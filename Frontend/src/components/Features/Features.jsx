import "./Features.css";
import {
  FaSearch,
  FaTint,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaSearch />,
      title: "Find Donors",
      description:
        "Search nearby blood donors by blood group and location.",
    },
    {
      icon: <FaTint />,
      title: "Become Donor",
      description:
        "Register yourself as a blood donor and help save lives.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Request Blood",
      description:
        "Create emergency blood requests and connect with donors.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Secure",
      description:
        "Your information is protected with a secure platform.",
    },
  ];

  return (
    <section className="features">

      <div className="features-container">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;