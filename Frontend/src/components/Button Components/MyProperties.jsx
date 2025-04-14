import React from "react";
import HomeWorkIcon from '@mui/icons-material/HomeWork';

function MyPropertiesBtn({ onClick }) {
  return (
    <div className="sidenav_button my_properties_button" onClick={onClick}>
        <HomeWorkIcon className="sidenav_icon" sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">My Properties</h1>
      </div>
  )
}

export default MyPropertiesBtn