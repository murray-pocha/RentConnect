import React from "react";
import TenantHeader from "./TenantHeader";
import ShareableLink from "./ShareableLink";
import Landlordreviews from "./LandLordReviews"
import "../../styles/TenantProfilePage.css";

function TenantProfilePage({rating}) {
  return(
    <div className="tenant_profile_page">
      <TenantHeader 
        rating={rating}
      />
      <ShareableLink />
      <Landlordreviews 
        rating={rating}
      />
    </div>
  )
}

export default TenantProfilePage;