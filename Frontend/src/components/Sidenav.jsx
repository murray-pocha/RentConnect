import React from "react";
import "../styles/Sidenav.css";
import MyProfBtn from "./Button Components/MyProfBtn";
import ViewPropertyBtn from "./Button Components/ViewPropertyBtn";
import AccountSettingsBtn from "./Button Components/AccountSettingsBtn";
import MyProperties from "./Button Components/MyProperties";
import MyApplicationsBtn from "./Button Components/MyApplicationsBtn";

function Sidenav({ User }) {
  return (
    <div className="sidenav_container">
      {User.role === "tenant" ? (
        <div className="tenant">
          <MyProfBtn to="/dashboard/profile-page" />
          <ViewPropertyBtn to="/dashboard/view-properties" />
          <MyApplicationsBtn to="/dashboard/view-applications" />
          <AccountSettingsBtn to="/dashboard/account-settings" />
        </div>
      ) : (
        <div className="landlord">
          <MyProfBtn to="/dashboard/profile-page" />
          <MyProperties to="/dashboard/my-properties" />
          <AccountSettingsBtn to="/dashboard/account-settings" />
        </div>
      )}
    </div>
  );
}

export default Sidenav;