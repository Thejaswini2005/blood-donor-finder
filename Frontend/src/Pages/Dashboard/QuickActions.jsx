import "./QuickActions.css";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

import {
  FaSearch,
  FaTint,
  FaHandHoldingHeart,
  FaClipboardList,
} from "react-icons/fa";

function QuickActions() {
  return (
    <section className="quick-actions">

      <h2 className="section-heading">
        Quick Actions
      </h2>

      <div className="actions-grid">

        <DashboardCard
          icon={<FaSearch />}
          title="Find Donors"
          description="Search donors by blood group and location."
          path="/find-donors"
        />

        <DashboardCard
          icon={<FaTint />}
          title="Become Donor"
          description="Register as a donor and help save lives."
          path="/become-donor"
        />

        <DashboardCard
          icon={<FaHandHoldingHeart />}
          title="Request Blood"
          description="Create a blood request and get help."
          path="/request-blood"
        />

        <DashboardCard
          icon={<FaClipboardList />}
          title="My Requests"
          description="Track your blood requests."
          path="/my-requests"
        />

      </div>

    </section>
  );
}

export default QuickActions;