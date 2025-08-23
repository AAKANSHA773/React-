
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [headerBtn, newHeaderBtn]=useState('Login')
  return (
    <div className="flex justify-between bg-emerald-100 m-2 shadow-fuchsia-950">
     <div><img
        className="w-24"
        src={LOGO_URL}
      /></div>
      <div className="nav-bar items-center">
        <ul className="flex p-4 m-2">
          <li className="pr-4"><Link to="/"> Home </Link></li>
          <li className="pr-4"> <Link to="/about">About Us</Link></li>
          <li className="pr-4"><Link to ="/contect">Contect Us</Link></li>
          <li className="pr-4"> Cart</li>
          <button className="header-btn " onClick={() =>{
           if (headerBtn==="Login" ? newHeaderBtn("Logout") :newHeaderBtn("Login"));
          }}
          >{headerBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;