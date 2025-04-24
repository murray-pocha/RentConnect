import React, { useState, useEffect } from "react";



const ViewApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      console.error("No user_id found in localStorage");
      return;
    }
  
    fetch(`http://localhost:3000/rental_applications?user_id=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch applications");
        return res.json();
      })
      .then((data) => {
        setApplications(data);
      })
      .catch((err) => {
        console.error("Error fetching applications:", err);
      });
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
              <p>Submitted: {app.created_at?.slice(0,10)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplications;