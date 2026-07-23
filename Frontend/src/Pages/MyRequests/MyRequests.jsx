import { useEffect, useState } from "react";
import "./MyRequests.css";

import Navbar from "../../components/Navbar/Navbar";
import { getMyRequests, deleteRequest } from "../../services/requestService";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const data = await getMyRequests();
      setRequests(data.requests);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this request?"
    );

    if (!confirmDelete) return;

    try {
      await deleteRequest(id);
      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="requests-page">
        <div className="requests-container">

          <h1>My Blood Requests</h1>

          {loading ? (
            <h2>Loading...</h2>
          ) : requests.length === 0 ? (
            <div className="empty-state">
              <h3>No Requests Found</h3>
              <p>You haven't created any blood requests yet.</p>
            </div>
          ) : (
            <div className="requests-grid">

              {requests.map((request) => (
                <div className="request-card" key={request._id}>

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

                  <p>
                    <strong>Blood Group:</strong>{" "}
                    {request.bloodGroup}
                  </p>

                  <p>
                    <strong>Hospital:</strong>{" "}
                    {request.hospitalName}
                  </p>

                  <p>
                    <strong>City:</strong>{" "}
                    {request.city}
                  </p>

                  <p>
                    <strong>Units:</strong>{" "}
                    {request.unitsRequired}
                  </p>

                  <p>
                    <strong>Required Date:</strong>{" "}
                    {new Date(
                      request.requiredDate
                    ).toLocaleDateString()}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(request._id)
                    }
                  >
                    Delete Request
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default MyRequests;