import React from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import "../styles/Sidenav.css"

function Sidenav() {
  return (
    <div className="sidenav_container">
      <div className="sidenav_button">
        <AccountCircleRoundedIcon className="sidenav_icon" sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">My Profile</h1>
      </div>
      <div className="sidenav_button">
        <HouseRoundedIcon className="sidenav_icon" sx={{fontSize: 40}}/> 
        <h1 className="sidenav_header">View Properties</h1>
      </div>
      <div className="sidenav_button">
        <SettingsRoundedIcon className="sidenav_icon"sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">Account Settings</h1>
      </div>
    </div>
  )
}

export default Sidenav