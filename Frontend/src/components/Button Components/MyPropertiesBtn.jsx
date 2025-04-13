import React from "react";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function MyPropertiesBtn() {
  return (
    <div className="my_properties_btn">
    <LocationOnRoundedIcon className="sidenav_icon nmy_properties_icon" sx={{fontSize: 40}}/>
    <h1 className="sidenav_header">My Properties</h1>
  </div>
  )
}

export default MyPropertiesBtn;