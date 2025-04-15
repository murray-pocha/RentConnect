import React from "react";
import { Link } from "react-router-dom";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function MyPropertiesBtn() {
  return (
    <Link to="/dashboard/my-properties" className="sidenav_button my_properties_btn">
      <LocationOnRoundedIcon className="sidenav_icon my_properties_icon" sx={{ fontSize: 40 }} />
      <h1 className="sidenav_header">My Properties</h1>
    </Link>
  );
}

export default MyPropertiesBtn;