import { useEffect, useState } from "react";
import "./Dashboard.css";

import Navbar from "../../components/Navbar/Navbar";

import StatsSection from "./StatsSection";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

import { getDashboardData } from "../../services/dashboardService";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboardData();
      setDashboardData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="dashboard-container">
          <h2>Loading Dashboard...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <div className="dashboard-container">
          <h1 className="dashboard-title">Dashboard</h1>

          <StatsSection data={dashboardData} />

          <QuickActions />

          <RecentActivity />

        </div>
      </main>
    </>
  );
}

export default Dashboard;