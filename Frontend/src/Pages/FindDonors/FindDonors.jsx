import { useEffect, useState } from "react";
import "./FindDonors.css";

import Navbar from "../../components/Navbar/Navbar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import DonorCard from "../../components/DonorCard/DonorCard";

import {
  getDonors,
  searchDonors,
} from "../../services/donorService";

function FindDonors() {
  const [donors, setDonors] = useState([]);

  const [filters, setFilters] = useState({
    bloodGroup: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const data = await getDonors();
      setDonors(data.donors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      const data = await searchDonors(filters);

      setDonors(data.donors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="find-donors-page">

        <div className="find-container">

          <h1>Find Blood Donors</h1>

          <SearchFilters
            filters={filters}
            handleChange={handleChange}
            handleSearch={handleSearch}
          />

          {loading ? (
            <h2>Loading donors...</h2>
          ) : donors.length === 0 ? (
            <h2>No donors found.</h2>
          ) : (
            <div className="donors-grid">

              {donors.map((donor) => (
                <DonorCard
                  key={donor._id}
                  donor={donor}
                />
              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default FindDonors;