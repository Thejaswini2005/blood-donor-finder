import "./RequestBlood.css";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import { createRequest } from "../../services/requestService";
import { getDonors } from "../../services/donorService";

function RequestBlood() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [allDonors, setAllDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const [formData, setFormData] = useState({
    donorId: "",
    bloodGroup: "",
    patientName: "",
    hospitalName: "",
    city: "",
    unitsRequired: "",
    requiredDate: "",
  });

  useEffect(() => {
    fetchDonors();
  }, []);

const fetchDonors = async () => {
  try {
    const data = await getDonors();

    console.log("DONORS RESPONSE:", data);
    console.log("DONORS ARRAY:", data.donors);

    setAllDonors(data.donors);
  } catch (error) {
    console.log(error);
  }
};

  const handleBloodGroup = (e) => {
  const bloodGroup = e.target.value;

  console.log("Selected Blood Group:", bloodGroup);

  const donors = allDonors.filter((donor) => {
    console.log(
      donor.userId?.username,
      donor.bloodGroup,
      donor.available
    );

    return (
      donor.bloodGroup?.trim().toUpperCase() ===
      bloodGroup.trim().toUpperCase()
    );
  });

  console.log("Filtered Donors:", donors);

  setFilteredDonors(donors);

  setFormData((prev) => ({
    ...prev,
    bloodGroup,
    donorId: "",
    city: "",
  }));
};

  const handleDonor = (e) => {
    const donor = allDonors.find(
      (d) => d._id === e.target.value
    );

    if (!donor) return;

    setFormData((prev) => ({
      ...prev,
      donorId: donor._id,
      city: donor.city,
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await createRequest(formData);

      toast.success(data.message);

      navigate("/my-requests");
    } catch (error) {
      toast.error(
  error.response?.data?.message || "Request Failed"
);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="request-page">
        <div className="request-container">

          <h1>🩸 Request Blood</h1>

          <form
            className="request-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label>Blood Group</label>

              <select
                value={formData.bloodGroup}
                onChange={handleBloodGroup}
                required
              >
                <option value="">
                  Select Blood Group
                </option>

                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>

              </select>

            </div>

            <div className="form-group">

              <label>Available Donor</label>

              <select
                value={formData.donorId}
                onChange={handleDonor}
                disabled={!formData.bloodGroup}
                required
              >

                <option value="">
                  {formData.bloodGroup
                    ? "Select Donor"
                    : "Select Blood Group First"}
                </option>

                {filteredDonors.map((donor) => (
                  <option
                    key={donor._id}
                    value={donor._id}
                  >
                    {donor.userId?.username} • {donor.city}
                  </option>
                ))}

              </select>

            </div>

            <div className="form-group">

              <label>Patient Name</label>

              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Hospital Name</label>

              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Units Required</label>

              <input
                type="number"
                name="unitsRequired"
                value={formData.unitsRequired}
                onChange={handleChange}
                min="1"
                required
              />

            </div>

            <div className="form-group full-width">

              <label>Required Date</label>

              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleChange}
                required
              />

            </div>

            <button
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Request"}
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default RequestBlood;