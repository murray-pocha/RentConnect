import React, { useState } from "react";
import "../styles/Sidenav.css"
import MyprofBtn from "./MyProfBtn";
import ViewPropertyBtn from "./ViewPropertyBtn";
import AccountSettingsBtn from "./AccountSettingsBtn";

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