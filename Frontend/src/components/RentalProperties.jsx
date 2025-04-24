import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import LeafletMapContainer from './ViewPropertiesDashboard/LeafletMapContainer'
import { get_all_rental_properties } from "../api/rentalEndpoints.js";

const RentalProperties = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [listings, setListings] = useState([]);
  
  const userId = user?.id;

  const getProperties = async () => {
    try {
      const properties = await get_all_rental_properties();
      setListings(properties);
    } catch (error) {
      console.error("Failed to fetch rental properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  const filteredListings = listings.filter((listing) => {
    const query = searchTerm.toLowerCase();
    const title = listing.title?.toLowerCase() || "";
    const location = listing.location?.toLowerCase() || "";

    return (
      (title.includes(query) ||
      location.includes(query)) &&
      (!minPrice || listing.fees >= parseInt(minPrice)) &&
      (!maxPrice || listing.fees <= parseInt(maxPrice)) &&
      (!minBedrooms || listing.bedrooms >= parseInt(minBedrooms)) &&
      (!selectedPropertyType ||
        listing.property_types?.toLowerCase().trim() ===
        selectedPropertyType.toLowerCase().trim())
    );
  });

  return (
    <div>
      <div
        style={{
          padding: "8rem 1rem 2rem 1rem",
          maxWidth: "calc(100% - 280px)",
          marginLeft: "260px",
          marginRight: "1rem",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Available Rental Properties
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "0.5rem", minWidth: "240px", borderRadius: "4px" }}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ padding: "0.5rem", width: "120px" }}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ padding: "0.5rem", width: "120px" }}
          />
          <input
            type="number"
            placeholder="Min Bedrooms"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
            style={{ padding: "0.5rem", width: "140px" }}
          />
          <select
            value={selectedPropertyType}
            onChange={(e) => setSelectedPropertyType(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "160px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">All Property Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
            <option value="Cabin">Cabin</option>
            <option value="Townhouse">Townhouse</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm("");
              setMinPrice("");
              setMaxPrice("");
              setMinBedrooms("");
              setSelectedPropertyType("");
            }}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Clear Filters
          </button>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => {
              const handleClick = () => console.log(listing);
              const handleApplyClick = () => handleApply(listing.id);

              return (
                <PropertyCard
                  key={listing.id}
                  listing={listing}
                  onClick={handleClick}
                  onApply={handleApplyClick}
                  isTenant={true}
                  userId={user?.id}
                />
              );
            })
          ) : (
            <p>No properties match your filters.</p>
          )}
        </div>

        {/* ✅ MAP WRAPPED TO MATCH PAGE LAYOUT */}
        <div
          style={{
            marginTop: "2rem",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <LeafletMapContainer listings={listings} />
        </div>
      </div>
    </div>
  );
};

export default RentalProperties;