import React from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import TenantDashboard from './components/TenantDashboard'
import LandLordDashboard from './components/LandlordDashboard'

function App() {

  const loggedIn = true //Rplace with state logic to authenticate user
  const isTenant = true //Rplace with state logic to authenticate user

  return (
    loggedIn ? 
      isTenant ? (
        <TenantDashboard />
      ) : (
        <LandLordDashboard />
      )
      : (
        <LoginPage />
      ))
}

export default App
