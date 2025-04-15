import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import LeafletMapContainer from './ViewPropertiesDashboard/LeafletMapContainer'
import { get_all_rental_properties,
        // get_rental_property,
        // create_rental_property,
        // edit_rental_property,
        // delete_rental_property,
      } from "../api/rentalEndpoints.js";

const RentalProperties = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const [listings, setListings] = useState([]);

  const getProperties = async () => {
    try {
      const properties = await get_all_rental_properties();
      console.log(properties); // Log the fetched data
      setListings(properties); // Update the state
    } catch (error) {
      console.error("Failed to fetch rental properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  const filteredListings = listings.filter((listing) => {
    const query = searchTerm.toLowerCase();

    return (
      (listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query)) &&
      (!minPrice || listing.fees >= parseInt(minPrice)) &&
      (!maxPrice || listing.fees <= parseInt(maxPrice)) &&
      (!minBedrooms || listing.bedrooms >= parseInt(minBedrooms)) &&
      (!selectedPropertyType || listing.property_types === selectedPropertyType)
    );
  });

  const handleApply = async (propertyId) => {
    console.log("✅ handleApply triggered for property:", propertyId); // CONFIRM entry
  
    try {
      const userId = 1; // TEMP until auth is integrated
  
      const response = await fetch("http://localhost:3000/rental_applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rental_property_id: propertyId,
          user_id: userId,
        }),
      });
  
      console.log("📡 Raw fetch response:", response); // CONFIRM request fired
  
      if (!response.ok) {
        throw new Error("Failed to apply");
      }
  
      const data = await response.json();
      alert("Application submitted!");
      console.log("🎉 Response from backend:", data);
    } catch (error) {
      alert("Error submitting application: " + error.message);
      console.error("❌ Apply error:", error);
    }
  };
  

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

      <div 
      style={{ 
        display: "grid", 
        gap: "1.5rem",
        }}>
  {filteredListings.length > 0 ? (
  filteredListings.map((listing) => {
    const handleClick = () => console.log(listing);
    const handleApplyClick = () => handleApply(listing.id);

    console.log("Rendering with handleApply:", typeof handleApply);
    return (
      <PropertyCard
        key={listing.id}
        listing={listing}
        onClick={handleClick}
        onApply={handleApplyClick}
      />
    );
  })
) : (
  <p>No properties match your filters.</p>
)}
      </div>
    </div>
    <LeafletMapContainer listings={listings}/>
    </div>
  );
};

export default RentalProperties;