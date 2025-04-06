import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./Tenant Dashboard/TenantProfilePage";


function TenantDashboard() {
  return (
    <>
      <Header/>
      <TenantProfilePage />
      <Sidenav />
    </>
  )
}

export default TenantDashboard