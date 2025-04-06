import React from "react";
import "../styles/Sidenav.css"
import MyprofBtn from "./MyProfBtn";
import ViewPropertyBtn from "./ViewPropertyBtn";
import AccountSettingsBtn from "./AccountSettingsBtn";

function Sidenav() {
  return (
    <div className="sidenav_container">
      <MyprofBtn />
      <ViewPropertyBtn />
      <AccountSettingsBtn />
    </div>
  )
}

export default Sidenav