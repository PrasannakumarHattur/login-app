import React, { useContext, memo,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
//import AuthContext from "../../../context/AuthContext";

function Header() {
 // const { getLoggedIn } = useContext(AuthContext);
  const history = useNavigate();

  async function logOut() {
    // localStorage.removeItem("auth");
    // getLoggedIn();
    history("/login");
  }


  return (
    <div className="header">
      <div className="header-title">Dashboard</div>
        <a className="header-logout" onClick={logOut}>
          Logout
        </a>
    </div>
  );
}

export default Header;
