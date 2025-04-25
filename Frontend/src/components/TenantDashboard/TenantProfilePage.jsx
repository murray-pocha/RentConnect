import React, { useEffect } from "react";
import TenantHeader from "./TenantHeader";
import ShareableLink from "./ShareableLink";
import Landlordreviews from "./LandLordReviews"
import "../../styles/TenantProfilePage.css";
import { getAllFeedbacks, getFeedbackById } from "../../api/feedBackEndpoints";

function TenantProfilePage({ User, rating }) {

  const getFeedback = async (id) => {
    const feedback = await getAllFeedbacks(id)
    .then(data => data
      .filter((feedback) => feedback.recipient_id === User.id))
    .then((filteredFeedback) => console.log("Feedback", filteredFeedback))
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    getFeedback(User.id)
  }, [])

  return(
    <div className="tenant_profile_page">
      <TenantHeader 
        User={User}
        rating={rating}
      />
      <ShareableLink />
      <Landlordreviews 
        rating={rating}
      />
    </div>
  )
}

export default TenantProfilePage;