import React, { useState } from "react";
import "../styles/Sidenav.css"
import MyprofBtn from "./Button Components/MyProfBtn";
import ViewPropertyBtn from "./Button Components/ViewPropertyBtn";
import AccountSettingsBtn from "./Button Components/AccountSettingsBtn";
import MyPropertiesBtn from "./Button Components/MyProperties";

function Sidenav({ activePage, setActivePage, pages, isTenant }) {


  return (
    <div className="sidenav_container">
      {isTenant ? (
        <div className="tenant">
          <MyprofBtn onClick={() => setActivePage(pages.tenantProfile)} />
          <ViewPropertyBtn onClick={() => setActivePage(pages.viewProperties)} />
          <AccountSettingsBtn onClick={() => setActivePage(pages.accountSettings)} />
        </div>
      ) : (
        <div className="sidenav_container landlord">
          <MyprofBtn onClick={() => setActivePage(pages.tenantProfile)} />
          <MyPropertiesBtn onClick={() => setActivePage(pages.myProperties)} />
          <AccountSettingsBtn onClick={() => setActivePage(pages.accountSettings)} />
        </div>
      )}
    </div>
  );
}

export default Sidenav