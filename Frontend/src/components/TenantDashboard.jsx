import React from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TenantProfilePage from "./TenantDashboard/TenantProfilePage";
import RentalProperties from "./RentalProperties";

function TenantDashboard({ activePage, setActivePage, pages, rating }) {
  return (
    <>
      <Header />
      {activePage === pages.tenantProfile && (
        <TenantProfilePage rating={rating} />
      )}

      {activePage === pages.viewProperties && <RentalProperties />}

      {activePage === pages.accountSettings && <div>Account Settings</div>}

      <Sidenav
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
}

export default TenantDashboard;