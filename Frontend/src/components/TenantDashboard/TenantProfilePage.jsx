import React, { useEffect, useState } from "react";
import TenantHeader from "./TenantHeader";
import ShareableLink from "./ShareableLink";
import Landlordreviews from "./LandLordReviews"
import "../../styles/TenantProfilePage.css";
import { getAllFeedbacks, getFeedbackById } from "../../api/feedBackEndpoints";

function TenantProfilePage({ User }) {

  const [feedback, setFeedback] = useState([])

  const getFeedback = async () => {
    await getAllFeedbacks()
    .then(data => data
      .filter((feedback) => feedback.recipient_id === User.id))
    .then((filteredFeedback) => setFeedback(filteredFeedback))
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    getFeedback(User.id)
  }, [User.id])
  
  const averageRating = (feedback) => {
    if(!feedback || feedback.length === 0) return 0

    const ratingSum = feedback.reduce((prev, curr) =>  prev + curr.rating, 0)
    return ratingSum / feedback.length
  }

  const rating = averageRating(feedback)

  return(
    <div className="tenant_profile_page">
      <TenantHeader 
        User={User}
        rating={rating}
        feedbackAmount = {feedback.length}
      />
      <ShareableLink />
      <Landlordreviews feedback={feedback} />
    </div>
  )
}

export default TenantProfilePage;