
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

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
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to ="/contect">Contect Us</Link></li>
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