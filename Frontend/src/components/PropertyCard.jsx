import React from "react";
import ApplyButton from "./Button Components/ApplyButton";

function PropertyCard({ listing, onClick }) {

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "white",
        cursor: "pointer",
        color: "black", // Global fallback for all text
      }}
      onClick={onClick}
    >
      <h2 style={{ color: "black" }}>{listing.title}</h2>
      <p style={{ color: "black" }}>
        <strong>Availability: Occupied</strong>
      </p>
      <p style={{ color: "black" }}>
        <strong>{listing.price}</strong> — {listing.location}
      </p>
      <p style={{ color: "black" }}>Bedrooms: {listing.bedrooms}</p>
      <p style={{ color: "black" }}>Type: {listing.propertyType}</p>

      {/* Apply Button */}
      <ApplyButton propertyId={listing.id} onClick={onClick}/>
    </div>
  );
}



export default PropertyCard;