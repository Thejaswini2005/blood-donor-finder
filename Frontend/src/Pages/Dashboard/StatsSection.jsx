import "./StatsSection.css";
import StatsCard from "../../components/StatsCard/StatsCard";

import {
  FaTint,
  FaClipboardList,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

function StatsSection({ data }) {
  const donor = data?.donor || {};
  const requests = data?.requests || [];

  return (
    <section className="stats-section">
      <div className="stats-grid">

        <StatsCard
          icon={<FaTint />}
          title="Blood Group"
          value={donor.bloodGroup || "--"}
          subtitle="Registered Blood Type"
          color="#E53935"
        />

        <StatsCard
          icon={<FaClipboardList />}
          title="My Requests"
          value={requests.length}
          subtitle="Requests Created"
          color="#E53935"
        />

        <StatsCard
          icon={<FaMapMarkerAlt />}
          title="My City"
          value={donor.city || "--"}
          subtitle="Current Location"
          color="#E53935"
        />

        <StatsCard
          icon={<FaCalendarAlt />}
          title="Last Donation"
          value={
            donor.lastDonationDate
              ? new Date(donor.lastDonationDate).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )
              : "Not Yet"
          }
          subtitle="Donation History"
          color="#E53935"
        />

      </div>
    </section>
  );
}

export default StatsSection;