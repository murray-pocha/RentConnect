import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./TenantDashboard/TenantProfilePage";
import RentalProperties from "./RentalProperties";
import MyProperties from "./MyProperties";

function TenantDashboard({ activePage, setActivePage, pages, rating, isTenant }) {
  return (
    <>
      <Header />

      {isTenant ? (

        <div className="tenant_dashboard_container">
          {activePage === pages.tenantProfile && (
            <TenantProfilePage rating={rating} />
          )}

          {activePage === pages.viewProperties && <RentalProperties />}

          {activePage === pages.accountSettings && <div>Account Settings</div>}
        </div>

    ) : (
        <div className="tenant_dashboard_container">
          {activePage === pages.tenantProfile && (
            <TenantProfilePage rating={rating} />
          )}

          {activePage === pages.myProperties && <MyProperties />}

          {activePage === pages.accountSettings && <div>Account Settings</div>}
        </div>
      )}

      <Sidenav
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
        isTenant={isTenant}
      />
    </>
  );
}

export default TenantDashboard;