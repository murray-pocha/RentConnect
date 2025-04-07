import React from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import StarRating from "../StarRating"

function TenantHeader({rating}) {

  return (
    <div>
    <div className="dashboard_header">
      <div className="header_background"></div>
      <div className="header_content">
        <img src="" alt="" />
        <div className="header_user_info">
          <div className="user_info">
            <h1>Tenant Name</h1>
            <StarRating 
            rating={rating}
            />
            <h3>`( Average ${rating} from 6 reviews )`</h3>
            <h2 className="location">Edmonton, AB</h2>
          </div>
          <div className="header_icons">
            <EditRoundedIcon className="header_icon" sx={{fontSize: 35}} 
            style={{cursor: "pointer"}}
            onClick={() => console.log("edit page")}
            />
            <ShareRoundedIcon className="header_icon" sx={{fontSize: 35}}
            style={{cursor: "pointer"}} 
            onClick={async () => {
              await navigator.clipboard.writeText('https://www.RentConnect.ca/tenant?my_page')
            }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TenantHeader;