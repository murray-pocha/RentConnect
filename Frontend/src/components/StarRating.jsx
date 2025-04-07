import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

function StarRating({rating}) {

  console.log("inside star rating", rating, typeof rating)

  //rating will have to be passed in and handled here

  return(
    <div className="rating">
    {[...Array(rating)].map((element, index) => (
      <StarRateRoundedIcon 
      key={index} 
      className="star_icon star filled" 
      sx={{fontSize: 30}} 
      />
    ))}
    {[...Array(5 - rating)].map((element, index) => (
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