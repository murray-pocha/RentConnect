import React from "react";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';

function ViewPropertyBtn() {
  return (
    <div className="sidenav_button">
        <HouseRoundedIcon className="sidenav_icon view_properties_button" sx={{fontSize: 40}}/> 
        <h1 className="sidenav_header">View Properties</h1>
      </div>
  )
}

export default ViewPropertyBtn