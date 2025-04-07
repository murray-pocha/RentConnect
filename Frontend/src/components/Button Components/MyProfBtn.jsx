import React from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function MyprofBtn({onClick}) {
  return (
    <div className="sidenav_button my_profile_button" onClick={onClick}>
        <AccountCircleRoundedIcon className="sidenav_icon" sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">My Profile</h1>
      </div>
  )
}

export default MyprofBtn