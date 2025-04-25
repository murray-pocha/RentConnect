import React from "react";
import UserReview from "../UserReview";
import { TextField } from "@mui/material";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

function LandlordReviews({ feedback }) {

  const [reviewButtonActive, setReviewButtonActive] = React.useState(false)
  const [review, setReview] = React.useState(0)
  const handleStarClick = (index) => {
    setReview(index + 1)};

    console.log("feedback", feedback)
 
  return (
    <>
      <div className="review_header">
        <h1>Reviews</h1>
        <button onClick={() => setReviewButtonActive(!reviewButtonActive)}>Leave a review</button>
      </div>
        {reviewButtonActive &&
          <div className="review_form">
          <form>
          {[...Array(5)].map((_, index) => (
              index < review ? (
                <StarRateRoundedIcon
                  key={index}
                  className="star_icon star filled"
                  sx={{ fontSize: 30 }}
                  onClick={() => handleStarClick(index)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <StarOutlineRoundedIcon
                  key={index}
                  className="star_icon star_empty"
                  sx={{ fontSize: 30 }}
                  onClick={() => handleStarClick(index)}
                  style={{ cursor: "pointer" }}
                />
              )
            ))}
            <TextField
              id="outlined-multiline-static"
              label="Write a review"
              multiline
              maxRows={8}
              variant="standard"
            />
              <button type="submit">Submit review</button>
          </form>
          </div>
        }
        {feedback.map((review) => ( 
          <UserReview 
            key={review.id}
            rating={review.rating}
            message={review.message}
            author_id={review.author_id} // Corrected prop name
            createdAt={review.created_at}
          />
        ))}
  </>
  )
}
export default LandlordReviews;