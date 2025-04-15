import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./TenantDashboard/TenantProfilePage";
import RentalProperties from "./RentalProperties";
import MyProperties from "./MyProperties";
import ViewApplications from "./ViewApplications";

function TenantDashboard({ isTenant }) {
  return (
    <>
      <Header />

      <div className="tenant_dashboard_container">
        <Routes>
          {/* Tenant dashboard routes */}
          {isTenant ? (
            <>
              <Route path="/" element={<TenantProfilePage rating={4.4} />} />
              <Route path="view-properties" element={<RentalProperties />} />
              <Route path="view-applications" element={<ViewApplications />} />
              <Route path="account-settings" element={<div>Account Settings</div>} />
            </>
          ) : (
            <>
              <Route path="/" element={<TenantProfilePage rating={4.4} />} />
              <Route path="my-properties" element={<MyProperties />} />
              <Route path="account-settings" element={<div>Account Settings</div>} />
            </>
          )}
        </Routes>
      </div>

      <Sidenav isTenant={isTenant} />
    </>
  );
}

export default TenantDashboard;