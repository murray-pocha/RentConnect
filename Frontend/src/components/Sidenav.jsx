import React from "react";
import "../styles/Sidenav.css";
import MyprofBtn from "./Button Components/MyProfBtn";
import ViewPropertyBtn from "./Button Components/ViewPropertyBtn";
import AccountSettingsBtn from "./Button Components/AccountSettingsBtn";
import MyPropertiesBtn from "./Button Components/MyProperties";
import MyApplicationsBtn from "./Button Components/MyApplicationsBtn"; // ✅ already imported

function Sidenav({ isTenant }) {
  return (
    <div className="sidenav_container">
      {isTenant ? (
        <div className="tenant">
          <MyprofBtn to="/dashboard" />
          <ViewPropertyBtn to="/dashboard/view-properties" />
          <MyApplicationsBtn to="/dashboard/view-applications" /> {/* ✅ New Button */}
          <AccountSettingsBtn to="/dashboard/account-settings" />
        </div>
      ) : (
        <div className="sidenav_container landlord">
          <MyprofBtn to="/dashboard" />
          <MyPropertiesBtn to="/dashboard/my-properties" />
          <AccountSettingsBtn to="/dashboard/account-settings" />
        </div>
      )}
    </div>
  );
}

export default Sidenav;