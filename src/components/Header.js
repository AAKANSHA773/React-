
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [headerBtn, newHeaderBtn]=useState('Login')
  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>cart</li>
          <button className="header-btn" onClick={() =>{
           if (headerBtn==="Login" ? newHeaderBtn("Logout") :newHeaderBtn("Login"));
          }}
          >{headerBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;