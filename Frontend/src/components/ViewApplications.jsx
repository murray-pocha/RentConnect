import React, { useState, useEffect } from "react";

// TEMP mock data — will replace with real API later
const mockApplications = [
  {
    id: 1,
    title: "Cozy Apartment in Downtown",
    status: "Pending",
    submittedAt: "2025-04-15",
  },
  {
    id: 2,
    title: "Spacious House in Suburbs",
    status: "Approved",
    submittedAt: "2025-04-10",
  },
];

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setApplications(mockApplications);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>My Rental Applications</h1>
      {applications.length === 0 ? (
        <p>You haven’t applied to any rentals yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {applications.map((app) => (
            <li
              key={app.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <h3>{app.title}</h3>
              <p>Status: <strong>{app.status}</strong></p>
              <p>Submitted: {app.submittedAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplications;