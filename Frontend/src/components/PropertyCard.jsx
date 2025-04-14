import React from "react";

function PropertyCard({ listing, onApply = () => {}, onClick = () => {} }) {
  console.log("PROPS RECEIVED in PropertyCard:", { onApply, onClick });
  console.log("typeof onApply:", typeof onApply);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <h2>{listing.title}</h2>
      <p>
        <strong>Avalability: Occupied</strong>
      </p>
      <p>
        <strong>{listing.price}</strong> — {listing.location}
      </p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Type: {listing.propertyType}</p>

      {/* Apply Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent click handler (onClick)
          console.log("Apply button clicked ✅");
          onApply(); // Trigger apply action
        }}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Apply to Rent
      </button>
    </div>
  );
}

export default PropertyCard;