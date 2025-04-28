import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

function StarRating({ rating }) {

  const validRating = Math.floor(rating)
  

  return(
    <div className="rating">
    {[...Array(validRating)].map((element, index) => (
      <StarRateRoundedIcon 
      key={index} 
      className="star_icon star filled" 
      sx={{fontSize: 30}} 
      />
    ))}
    {[...Array(5 - validRating)].map((element, index) => (
      <StarOutlineRoundedIcon 
      key={index} 
      className="star_icon star_empty" 
      sx={{fontSize: 30}} 
      />
    ))}
  </div>
  )
}

export default StarRating;