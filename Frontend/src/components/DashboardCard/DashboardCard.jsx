import "./DashboardCard.css";
import { Link } from "react-router-dom";

function DashboardCard({ icon, title, description, path }) {
  return (
    <Link to={path} className="dashboard-card">

      <div className="dashboard-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="arrow">
        →
      </span>

    </Link>
  );
}

export default DashboardCard;