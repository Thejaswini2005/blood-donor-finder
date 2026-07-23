import "./StatsCard.css";

function StatsCard({
  icon,
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div className="stats-card">

      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>

      <p>{subtitle} →</p>

    </div>
  );
}

export default StatsCard;