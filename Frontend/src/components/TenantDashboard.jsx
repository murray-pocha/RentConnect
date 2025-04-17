import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./TenantDashboard/TenantProfilePage";
import RentalProperties from "./RentalProperties";
import MyProperties from "./MyProperties";
import ViewApplications from "./ViewApplications";
import PropertyPage from "./PropertyPage";
import AddProperty from "./AddProperty";

function TenantDashboard({ isTenant }) {

    const location = useLocation();
    

  return (
    <>
      <Header />

      <div className="tenant_dashboard_container">
        <Routes>
          {/* Tenant dashboard routes */}
          <Route path="property/:id`" element={<PropertyPage />}/>
          {isTenant ? (
            <>
              <Route index element={<TenantProfilePage rating={4.4} />} />
              <Route path="view-properties" element={<RentalProperties />} />
              <Route path="view-applications" element={<ViewApplications />} />
              <Route path="account-settings" element={<div>Account Settings</div>} />
            </>
          ) : (
            <>
              <Route index element={<TenantProfilePage rating={4.4} />} />
              <Route path="my-properties" element={<MyProperties isTenant={isTenant}/>} />
              <Route path="property/:id" element={<PropertyPage />} />
              <Route path="add-property" element={<AddProperty />}/>
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