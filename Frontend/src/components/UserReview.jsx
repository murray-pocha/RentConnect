import React from "react";
import StarRating from "./StarRating";

function UserReview() {
  return(
    <div className="user_review_container">
      <div className="reviewer_info">
        <img src="" alt="" />
        <h3>User Name</h3>
        <StarRating />
      </div>
      <div className="review content">
        <p>This dude wrecked my place</p>
      </div>
    </div>
  )
}

export default UserReview;