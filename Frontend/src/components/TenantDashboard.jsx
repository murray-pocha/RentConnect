import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import RenterApplicationForm from "./TenantDashboard/RenterApplicationForm";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./TenantDashboard/TenantProfilePage";
import RentalProperties from "./RentalProperties";
import MyProperties from "./MyProperties";
import ViewApplications from "./ViewApplications";
import PropertyPage from "./PropertyPage";
import AddProperty from "./AddProperty";

function TenantDashboard({ User, setLoggedIn }) {

    const location = useLocation();

    if(!User) {
      return <Navigate to={"/sign-up"} state={{from: '/dashboard'}} replace/>
    }
    

  return (
    <>
      <Header User={User} setLoggedIn={setLoggedIn}/>

      <div className="tenant_dashboard_container">
        <Routes>
          {/* Tenant dashboard routes */}
          <Route path="property/:id" element={<PropertyPage />}/>
          {User.role === "tenant" ? (
            <>
              <Route index element={<TenantProfilePage User={User} rating={4.4} />} />
              <Route path="view-properties" element={<RentalProperties />} />
              <Route path="view-applications" element={<ViewApplications />} />
              <Route path="account-settings" element={<div>Account Settings</div>} />
              <Route path="renter-application" element={<RenterApplicationForm />} />
            </>
          ) : (
            <>
              <Route index element={<TenantProfilePage User={User} rating={4.4} />} />
              <Route path="my-properties" element={<MyProperties />} />
              <Route path="property/:id" element={<PropertyPage />} />
              <Route path="add-property" element={<AddProperty />}/>
              <Route path="account-settings" element={<div>Account Settings</div>} />
              
            </>
          )}
        </Routes>
      </div>

      <Sidenav User={User} />
    </>
  );
}

export default TenantDashboard;