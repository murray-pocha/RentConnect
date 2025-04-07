import React from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import TenantDashboard from './components/TenantDashboard'

function App() {


  //Placeholder variables to navigate the site until authentication and routes are implemented

  const loggedIn = true //Replace with state logic to authenticate user

  return (
    loggedIn ? 
        <TenantDashboard />
      :
        <LoginPage />
      )
}

export default App
