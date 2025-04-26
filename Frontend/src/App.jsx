import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./components/LoginPage";
import TenantDashboard from "./components/TenantDashboard";
import ViewApplications from "./components/ViewApplications";
import RentalProperties from "./components/RentalProperties";
import AddProperty from './components/AddProperty';
import RenterApplicationForm from "./components/TenantDashboard/RenterApplicationForm";
import SignUp from "./components/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [User, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  return (
    <Routes>
      {/* Entry Route: Redirect based on login */}
      <Route
        path="/"
        element={
          User && User.id ? (
            <Navigate to="/dashboard" />
          ) : (
            <LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />
          )
        }
      />

      {/* Dashboard layout wrapper */}
      <Route
        path="/dashboard/*"
        element={<TenantDashboard User={User} setLoggedIn={setLoggedIn} />}
      >
        {/* Nested routes inside dashboard layout */}
        <Route path="view-properties" element={<RentalProperties user={User} />} />
        <Route path="view-applications" element={<ViewApplications />} />
        <Route path="renter-application" element={<RenterApplicationForm />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="account-settings" element={<div>Account Settings</div>} />
        <Route index element={<div>Welcome to your dashboard!</div>} />
      </Route>

      {/* Sign Up route (outside dashboard layout) */}
      <Route path="/sign-up" element={<SignUp setUser={setUser}/>} />
    </Routes>
  );
}

export default App;