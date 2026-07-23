import "./ActivityCard.css";

function ActivityCard({
  icon,
  title,
  subtitle,
  status,
  time,
}) {
  return (
    <div className="activity-card">

      <div className="activity-left">

        <div className="activity-icon">
          {icon}
        </div>

        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>

      </div>

      <div className="activity-right">

        <span className={`status ${status.toLowerCase()}`}>
          {status}
        </span>

        <small>{time}</small>

      </div>

    </div>
  );
}

export default ActivityCard;