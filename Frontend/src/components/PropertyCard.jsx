import React from "react";

function PropertyCard ({ listing}) {

  return (
              <div
            key={listing.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "white",
            }}
          >
            <h2>{listing.title}</h2>
            <p><strong>Avalability: Occupied</strong></p>
            <p>
              <strong>{listing.price}</strong> — {listing.location}
            </p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Type: {listing.propertyType}</p>
          </div>
  )
}

export default PropertyCard;