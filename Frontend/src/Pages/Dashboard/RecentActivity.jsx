import "./RecentActivity.css";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import {
  FaTint,
  FaUserPlus,
  FaClock,
} from "react-icons/fa";

function RecentActivity() {
  return (
    <section className="recent-activity">

      <h2 className="section-heading">
        Recent Activity
      </h2>

      <div className="activity-list">

        <ActivityCard
          icon={<FaTint />}
          title="Blood Request Accepted"
          subtitle="Your request for O+ blood has been accepted."
          status="Accepted"
          time="2 hours ago"
        />

        <ActivityCard
          icon={<FaUserPlus />}
          title="New Donor Available"
          subtitle="A new O+ donor joined in Hyderabad."
          status="New"
          time="1 day ago"
        />

        <ActivityCard
          icon={<FaClock />}
          title="Donation Reminder"
          subtitle="You're eligible to donate again."
          status="Reminder"
          time="5 days ago"
        />

      </div>

    </section>
  );
}

export default RecentActivity;