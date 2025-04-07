import React from "react";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function AccountSettingsBtn({onClick}) {
  return(
    <div className="sidenav_button" onClick={onClick}>
        <SettingsRoundedIcon className="sidenav_icon account_settings_icon"sx={{fontSize: 40}}/>
        <h1 className="sidenav_header">Account Settings</h1>
      </div>
  )
}

export default AccountSettingsBtn;