import React from "react";
import UserReview from "../UserReview";

function LandlordReviews() {
  return(
    <>
      <div className="review_header">
        <h1>Reviews</h1>
        <button>Leave a review</button>
      </div>
      <UserReview />
    </>
  )
}

export default LandlordReviews;