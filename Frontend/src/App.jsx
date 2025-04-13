import React from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import TenantDashboard from './components/TenantDashboard'
import { useState } from 'react'

function App() {


  //Placeholder variables to navigate the site until authentication and routes are implemented

  const loggedIn = true //Replace with state logic to authenticate user

  const isTenant = false

  const pages = {
    viewProperties: "viewProperties",
    tenantProfile: "tenantProfile",
    accountSettings: "accountSettings",
    myProperties: "myProperties",
  }

  const [activePage, setActivePage] = useState(pages.myProperties)

  const rating = 4.4 || 0

  return (
    loggedIn ? 
        <TenantDashboard 
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
        rating={rating}
        isTenant={isTenant}
        />
      :
        <LoginPage />
      )
}

export default App
