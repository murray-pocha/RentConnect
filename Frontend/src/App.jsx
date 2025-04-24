import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./components/LoginPage";
import TenantDashboard from "./components/TenantDashboard";
import ViewApplications from "./components/ViewApplications";
import RentalProperties from "./components/RentalProperties";
import AddProperty from './components/AddProperty';
import RenterApplicationForm from "./components/TenantDashboard/RenterApplicationForm";

function App() {
  const loggedIn = true;
  const isTenant = true;

  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
      />

      {/* Nested dashboard route */}
      <Route path="/dashboard/*" element={<TenantDashboard isTenant={isTenant} />} />

      {/* Standalone route for testing if needed */}
      <Route path="/applications" element={<ViewApplications />} />
      <Route path="/view-properties" element={<RentalProperties />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/renter-application" element={<RenterApplicationForm />} />
    </Routes>
  );
}

export default App;