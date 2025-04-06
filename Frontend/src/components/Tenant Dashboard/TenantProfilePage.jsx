import React from "react";
import TenantHeader from "./TenantHeader";
import ShareableLink from "./ShareableLink";
import Landlordreviews from "./LandLordReviews"
import "../../styles/TenantProfilePage.css";

function TenantProfilePage() {
  return(
    <div className="tenant_profile_page">
      <TenantHeader />
      <ShareableLink />
      <Landlordreviews />
    </div>
  )
}

export default TenantProfilePage;