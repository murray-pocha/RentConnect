import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";

function TenantDashboard() {
  return (
    <>
      <Header/>
        <div>
          <div className="dashboard_header">
            <div className="header_background"></div>
            <div className=""></div>
          </div>
          <h1>Tenant Dashboard</h1>
        </div>

      <Sidenav />
    </>
  )
}

export default TenantDashboard