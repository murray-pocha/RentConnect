const API_BASE_URL = "http://localhost:3001"; // Replace with your backend's base URL if different

// Fetch all feedbacks
export const getAllFeedbacks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedbacks`);
    if (!response.ok) {
      throw new Error("Failed to fetch feedbacks");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw error;
  }
};

// Fetch a single feedback by ID
export const getFeedbackById = async (feedbackId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch feedback with ID: ${feedbackId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching feedback with ID ${feedbackId}:`, error);
    throw error;
  }
};

// Create a new feedback
export const createFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors || "Failed to create feedback");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating feedback:", error);
    throw error;
  }
};

// Update an existing feedback by ID
export const updateFeedback = async (feedbackId, feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors || `Failed to update feedback with ID: ${feedbackId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating feedback with ID ${feedbackId}:`, error);
    throw error;
  }
};

// Delete a feedback by ID
export const deleteFeedback = async (feedbackId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete feedback with ID: ${feedbackId}`);
    }
    return true; // Return true to indicate successful deletion
  } catch (error) {
    console.error(`Error deleting feedback with ID ${feedbackId}:`, error);
    throw error;
  }
};

