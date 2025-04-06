import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

function StarRating({rating}) {

  //rating will have to be passed in and handled here

  return(
    <div className="rating">
    <StarRateRoundedIcon className="star_icon star filled" sx={{fontSize: 30}} />
    <StarRateRoundedIcon className="star_icon star filled" sx={{fontSize: 30}} />
    <StarRateRoundedIcon className="star_icon star filled" sx={{fontSize: 30}} />
    <StarRateRoundedIcon className="star_icon star filled" sx={{fontSize: 30}} />
    <StarOutlineRoundedIcon className="star_icon star filled" sx={{fontSize: 30}} />
  </div>
  )
}

export default StarRating;