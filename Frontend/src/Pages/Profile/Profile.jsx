import "./Profile.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";

import {
  getMyDonorProfile,
  updateDonor,
} from "../../services/donorService";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    bloodGroup: "",
    age: "",
    gender: "",
    mobileNumber: "",
    city: "",
    state: "",
    address: "",
    lastDonationDate: "",
    available: true,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getMyDonorProfile();

      const donor = data.donor;

      setFormData({
        bloodGroup: donor.bloodGroup || "",
        age: donor.age || "",
        gender: donor.gender || "",
        mobileNumber: donor.mobileNumber || "",
        city: donor.city || "",
        state: donor.state || "",
        address: donor.address || "",
        available: donor.available,
        lastDonationDate: donor.lastDonationDate
          ? donor.lastDonationDate.slice(0, 10)
          : "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateDonor(formData);

      toast.success(data.message);

      setEditing(false);

      fetchProfile();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 className="loading">
          Loading...
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="profile-container">

          <h1>👤 My Profile</h1>

          <form onSubmit={handleSubmit}>

            <div className="profile-grid">

              <div className="form-group">
                <label>Blood Group</label>

                <input
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>Age</label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={!editing}
                >
                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>

                <input
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>City</label>

                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>State</label>

                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

            </div>

            <div className="form-group full-width">

              <label>Address</label>

              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!editing}
              />

            </div>

            <div className="profile-grid">

              <div className="form-group">

                <label>Last Donation Date</label>

                <input
                  type="date"
                  name="lastDonationDate"
                  value={formData.lastDonationDate}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

              <div className="form-group checkbox-group">

                <label>

                  <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                    disabled={!editing}
                  />

                  Available for Donation

                </label>

              </div>

            </div>

            {editing ? (

              <button
                type="submit"
                className="save-btn"
              >
                Save Changes
              </button>

            ) : (

              <button
  type="button"
  className="edit-btn"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Edit button clicked");

    setEditing(true);
  }}
>
  Edit Profile
</button>

            )}

          </form>

        </div>

      </div>

    </>
  );
}

export default Profile;