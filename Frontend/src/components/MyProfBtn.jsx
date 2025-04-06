import React from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function MyprofBtn() {
  return (
    <div className="sidenav_button my_profile_button">
        <AccountCircleRoundedIcon className="sidenav_icon" sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">My Profile</h1>
      </div>
  )
}

export default MyprofBtn