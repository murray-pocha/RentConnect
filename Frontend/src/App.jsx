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
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  
  return (
    <Routes>
      <Route
        path="/"
        element={User ? <Navigate to="/dashboard" /> : <Navigate to={"/sign-up"} />}
      />

      {/* Nested dashboard route */}
      <Route path="/dashboard/*" element={<TenantDashboard User={User} setLoggedIn={setLoggedIn} />} />

      {/* Standalone routes */}
      <Route path="/applications" element={<ViewApplications />} />
      <Route path="/view-properties" element={<RentalProperties />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/renter-application" element={<RenterApplicationForm />} />
      <Route path="/sign-up" element={<LoginPage setLoggedIn={setLoggedIn} setUser={setUser} />}/>
    </Routes>
  );
}

export default App;