import React from "react";

function ApplyButton({ propertyId, onClick }) {

const handleApply = async (propertyId) => {
  console.log("✅ handleApply triggered for property:", propertyId);

  try {
    const userId = 1;

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

    <button
      onClick={() => handleApply(propertyId)}
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
  )
}

export default ApplyButton