import "./BecomeDonor.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import { createDonor } from "../../services/donorService";

function BecomeDonor() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    bloodGroup: "",
    age: "",
    gender: "",
    mobileNumber: "",
    city: "",
    state: "",
    address: "",
    lastDonationDate: "",
  });

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

      const data = await createDonor(formData);

      toast.success(data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to register as donor."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="become-page">

        <div className="become-container">

          <h1>❤️ Become a Blood Donor</h1>

          <p className="subtitle">
            Join our donor community and help save lives.
          </p>

          <form
            className="donor-form"
            onSubmit={handleSubmit}
          >

            <h3>Personal Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Blood Group</label>

                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Group</option>
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
                <label>Age</label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>

                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <h3>Location</h3>

            <div className="form-grid">

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
                <label>State</label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Address</label>

              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <h3>Donation Information</h3>

            <div className="form-group">
              <label>Last Donation Date</label>

              <input
                type="date"
                name="lastDonationDate"
                value={formData.lastDonationDate}
                onChange={handleChange}
              />
            </div>

            <button
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? "Registering..."
                : "Register as Donor"}
            </button>

          </form>

        </div>

      </div>

    </>
  );
}

export default BecomeDonor;