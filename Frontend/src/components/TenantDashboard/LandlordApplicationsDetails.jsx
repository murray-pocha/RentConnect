import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyApplications = [
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

const LandlordApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const savedApplications = JSON.parse(localStorage.getItem("landlordApplications"));
  const applications = savedApplications && savedApplications.length > 0 ? savedApplications : dummyApplications;
  const application = applications.find(app => app.id === parseInt(id));
  const [status, setStatus] = useState(application?.status || "Pending");

  if (!application) {
    return <div style={{ padding: "2rem" }}>Application not found.</div>;
  }

  return (
    <div style={{ padding: "2rem", color: "black" }}>
      <h1>Tenant Application Details</h1>
      <p><strong>First Name:</strong> {application.firstName}</p>
      <p><strong>Last Name:</strong> {application.lastName}</p>
      <p><strong>Age:</strong> {application.age}</p>
      <p><strong>Current Address:</strong> {application.currentAddress}</p>
      <p><strong>Province:</strong> {application.province}</p>
      <p><strong>City:</strong> {application.city}</p>
      <p><strong>Country:</strong> {application.country}</p>
      <p><strong>Employment Status:</strong> {application.employmentStatus}</p>
      <p><strong>Employer Name:</strong> {application.employerName}</p>
      <p><strong>Years at Employer:</strong> {application.yearsAtEmployer}</p>
      <p><strong>Payment Type:</strong> {application.paymentType}</p>
      <p><strong>Property Applying For:</strong> {application.propertyTitle}</p>
      <p><strong>Current Status:</strong> {status}</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => {
            setStatus("Accepted");
            const savedApps = JSON.parse(localStorage.getItem("landlordApplications")) || [];
            const updatedApps = savedApps.map(app =>
              app.id === application.id ? { ...app, status: "Accepted" } : app
            );
            localStorage.setItem("landlordApplications", JSON.stringify(updatedApps));
            navigate("/dashboard/landlord-applications")
          }}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Accept
        </button>

        <button
          onClick={() => {
            setStatus("Rejected");
            const savedApps = JSON.parse(localStorage.getItem("landlordApplications")) || [];
            const updatedApps = savedApps.map(app =>
              app.id === application.id ? { ...app, status: "Rejected" } : app
            );
            localStorage.setItem("landlordApplications", JSON.stringify(updatedApps));
            navigate("/dashboard/landlord-applications")
          }}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Reject
        </button>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/dashboard/landlord-applications")}
            style={{
              marginTop: "1rem",
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Back to Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandlordApplicationDetails;