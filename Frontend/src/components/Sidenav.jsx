import React from "react";
import "../styles/Sidenav.css"
import MyprofBtn from "./MyProfBtn";
import ViewPropertyBtn from "./ViewPropertyBtn";
import AccountSettingsBtn from "./AccountSettingsBtn";
import MyPropertiesBtn from "./MyPropertiesBtn";

function Sidenav() {

  let isTenant = true

  return (
    <div className="sidenav_container">
      {isTenant ? (
        <>
          <MyprofBtn />
          <ViewPropertyBtn />
          <AccountSettingsBtn />
        </>
      ) :

      (
        <>
          <MyprofBtn />
          <MyPropertiesBtn />
          <AccountSettingsBtn />
        </>
      )
      }
    </div>
  )
}

export default Sidenav