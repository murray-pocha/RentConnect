import React, { useState } from "react";
import "../styles/Sidenav.css"
import MyprofBtn from "./Button Components/MyProfBtn";
import ViewPropertyBtn from "./Button Components/ViewPropertyBtn";
import AccountSettingsBtn from "./Button Components/AccountSettingsBtn";

function Sidenav({activePage, setActivePage, pages}) {


  return (
    <div className="sidenav_container">
      <MyprofBtn onClick={() => setActivePage(pages.tenantProfile)}/>
      <ViewPropertyBtn onClick={() => {
        setActivePage(pages.viewProperties)}}/>
      <AccountSettingsBtn onClick={() => setActivePage(pages.accountSettings)}/>
    </div>
  )
}

export default Sidenav