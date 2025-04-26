import React from "react";
import Login from "./Login"
import Header from './Header'
import Footer from './Footer'

function LoginPage({ setLoggedIn, setUser }) {

return (
  <div>
    <Header />
    <Login setLoggedIn={setLoggedIn} setUser={setUser} />
    <Footer />
  </div>
)

}

export default LoginPage