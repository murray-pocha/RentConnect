import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./Tenant Dashboard/TenantProfilePage";


function TenantDashboard({activePage, setActivePage, pages, rating}) {
  return (
    <>
      <Header/>
      { activePage === pages.tenantProfile && 
        <TenantProfilePage 
        rating={rating}
        />}
      { activePage === pages.viewProperties && <div>View Properties</div>}
      { activePage === pages.accountSettings && <div>Account Settings</div>}
      <Sidenav 
      pages={pages}
      activePage={activePage} 
      setActivePage={setActivePage}
      />
    </>
  )
}

export default TenantDashboard