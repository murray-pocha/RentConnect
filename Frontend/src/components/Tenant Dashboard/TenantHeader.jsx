import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import StarRating from "../StarRating"

function TenantHeader() {
  return (
    <div>
    <div className="dashboard_header">
      <div className="header_background"></div>
      <div className="header_content">
        <img src="" alt="" />
        <div className="header_user_info">
          <div className="user_info">
            <h1>Tenant Name</h1>
            <StarRating />
            <h3>( Average 4.4 from 6 reviews )</h3>
            <h2 className="location">Edmonton, AB</h2>
          </div>
          <div className="header_icons">
            <EditRoundedIcon className="header_icon" sx={{fontSize: 35}} />
            <ShareRoundedIcon className="header_icon" sx={{fontSize: 35}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TenantHeader;