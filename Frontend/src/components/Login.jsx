import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Login() {

  return (
    <Box
      component={"form"}
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
      <h1 className="login_header">Log In</h1>
      <div>
        <TextField
            id="standard-password-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="standard"
          />
        <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
        />
    </div>
    </Box>
  )
}

export default Login;