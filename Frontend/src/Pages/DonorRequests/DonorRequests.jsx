import "./DonorRequests.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";


import {
  FaCheckCircle,
  FaTimesCircle,
  FaHospital,
  FaTint,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  getAllRequests,
  getDonorRequests,
  updateRequestStatus,
} from "../../services/requestService";

function DonorRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

const fetchRequests = async () => {
  try {
    const data = await getDonorRequests();
    setRequests(data.requests);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  const handleStatus = async (id, status) => {
    try {
      const data = await updateRequestStatus(id, status);

      toast.success(data.message);

      fetchRequests();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to update request."
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

      <div className="donor-requests-page">

        <div className="requests-container">

          <h1>🩸 Donor Requests</h1>

          {requests.length === 0 ? (

            <div className="empty-state">
              <h2>No Requests Found</h2>
            </div>

          ) : (

            <div className="requests-grid">

              {requests.map((request) => (

                <div
                  key={request._id}
                  className="request-card"
                >

                  <div className="request-header">

                    <h3>{request.patientName}</h3>

                    <span
                      className={`status ${request.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {request.status}
                    </span>

                  </div>

                  <div className="request-details">

                    <p>
                      <FaTint />
                      <strong>Blood Group :</strong>
                      {request.bloodGroup}
                    </p>

                    <p>
                      <FaHospital />
                      <strong>Hospital :</strong>
                      {request.hospitalName}
                    </p>

                    <p>
                      <FaMapMarkerAlt />
                      <strong>City :</strong>
                      {request.city}
                    </p>

                    <p>
                      <strong>Units :</strong>
                      {request.unitsRequired}
                    </p>

                    <p>
                      <FaCalendarAlt />
                      <strong>Date :</strong>
                      {new Date(
                        request.requiredDate
                      ).toLocaleDateString()}
                    </p>

                  </div>

                  {/* Pending */}

                  {request.status === "Pending" && (

                    <div className="action-buttons">

                      <button
                        className="accept-btn"
                        onClick={() =>
                          handleStatus(
                            request._id,
                            "Accepted"
                          )
                        }
                      >
                        <FaCheckCircle />
                        Accept
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() =>
                          handleStatus(
                            request._id,
                            "Rejected"
                          )
                        }
                      >
                        <FaTimesCircle />
                        Reject
                      </button>

                    </div>

                  )}

                  {/* Accepted */}

                  {request.status === "Accepted" && (

                    <button
                      className="complete-btn"
                      onClick={() =>
                        handleStatus(
                          request._id,
                          "Completed"
                        )
                      }
                    >
                      Mark as Completed
                    </button>

                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default DonorRequests;