import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

const RentalProperties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const [listings, setListings] = useState([]);

  // Default mock data
  const mockListings = [
    {
      id: 1,
      title: "Modern Loft in Downtown",
      description: "2 bed, 2 bath apartment near all amenities.",
      price: "$1,800/mo",
      location: "Downtown",
      bedrooms: 2,
      propertyType: "apartment",
    },
    {
      id: 2,
      title: "Cozy Suburban House",
      description: "3 bed, 2 bath house with backyard.",
      price: "$2,200/mo",
      location: "Suburbs",
      bedrooms: 3,
      propertyType: "house",
    },
    {
      id: 3,
      title: "Studio Apartment",
      description: "Open-concept studio ideal for students.",
      price: "$1,200/mo",
      location: "University District",
      bedrooms: 1,
      propertyType: "studio",
    },
  ];

  // Simulate fetching data from an API
  useEffect(() => {
    // Replace this with actual API call later
    // fetch("/api/properties")
    //   .then((res) => res.json())
    //   .then((data) => setListings(data))
    //   .catch((err) => console.error("Failed to fetch listings:", err));

    // Using mock data for now
    setListings(mockListings);
  }, []);

  const filteredListings = listings.filter((listing) => {
    const query = searchTerm.toLowerCase();
    const numericPrice = parseInt(listing.price.replace(/[^0-9]/g, ""));

    return (
      (listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query)) &&
      (!minPrice || numericPrice >= parseInt(minPrice)) &&
      (!maxPrice || numericPrice <= parseInt(maxPrice)) &&
      (!minBedrooms || listing.bedrooms >= parseInt(minBedrooms)) &&
      (!selectedPropertyType || listing.propertyType === selectedPropertyType)
    );
  });

  return (
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
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
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
          filteredListings.map((listing) => (
            <PropertyCard 
            key={listing.id} 
            listing={listing} 
            onClick={() => console.log(listing)}/>
          ))
        ) : (
          <p>No properties match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default RentalProperties;