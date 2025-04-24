import React from "react";
import "../styles/Header.css"
import LogoutButton from "./Button Components/LogoutButton";

function Header() {

return (
  <header className="header">
    <div className="header_logo">
      <h1 className="header_title_Primary">Rent</h1>
      <h1 className="header_title_Secondary">Connect</h1>
      <LogoutButton />
    </div>
  </header>
)

};

export default Header