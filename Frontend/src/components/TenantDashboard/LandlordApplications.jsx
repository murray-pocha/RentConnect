import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LandlordApplications = () => {

  const [applications, setApplications] = useState(() => {
    const savedApps = localStorage.getItem("landlordApplications");
    return savedApps ? JSON.parse(savedApps) : [

      {
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        age: 28,
        currentAddress: "123 Main Street",
        province: "BC",
        city: "Vancouver",
        country: "Canada",
        employmentStatus: "Employed",
        employerName: "DevCo Ltd.",
        yearsAtEmployer: 2,
        paymentType: "Credit",
        propertyTitle: "Sunny Apartment Downtown",
        status: "Pending"
      },
      {
        id: 2,
        firstName: "Bob",
        lastName: "Johnson",
        age: 35,
        currentAddress: "456 Elm Street",
        province: "ON",
        city: "Toronto",
        country: "Canada",
        employmentStatus: "Self-Employed",
        employerName: "Bob's Plumbing",
        yearsAtEmployer: 5,
        paymentType: "Credit",
        propertyTitle: "Cozy Suburban House",
        status: "Pending"
      }
    ];
  });

  const navigate = useNavigate();

  const handleAccept = (id) => {
    setApplications(prev => {
      const updated = prev.map(app =>
        app.id === id ? { ...app, status: "Accepted" } : app
      );
      localStorage.setItem("landlordApplications", JSON.stringify(updated));
      return updated;
    });
  };

  const handleReject = (id) => {
    setApplications(prev => {
      const updated = prev.map(app =>
        app.id === id ? { ...app, status: "Rejected" } : app
      );
      localStorage.setItem("landlordApplications", JSON.stringify(updated));
      return updated;
    });
  };


  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tenant Applications</h1>
      {applications.map((app) => (
        <div
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
          <h3>{app.tenantName}</h3>
          <p>Applying for: <strong>{app.propertyTitle}</strong></p>
          <p>Age: {app.age}</p>
          <p>Employer: {app.employer}</p>
          <p>Status: {app.status}</p>

          <button
            onClick={() => navigate(`/dashboard/application/${app.id}`)}
            style={{
              width: "100%",
              marginTop: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            View Details
          </button>


          <div style={{ marginTop: "0.5rem" }}>
            <button onClick={() => handleAccept(app.id)} style={{ marginRight: "1rem" }}>
              Accept
            </button>
            <button onClick={() => handleReject(app.id)}>
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandlordApplications;