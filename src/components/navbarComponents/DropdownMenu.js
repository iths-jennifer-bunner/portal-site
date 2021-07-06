import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./DropdownMenu.scss";
import "./Navbar.scss";
import UseDetectOutsideClick from "./UseDetectOutsideClick.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { clearSessionStorage } from "../../utils/Common"

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const handleLogout = () => {
    clearSessionStorage();
  }

  return (
    <div className="menu-container navbar-container navbar__links--Effects">
      <li onClick={onClick} className="navbar__item navbar__links">
        <span className="navbar__links ">
          Administration
          <ExpandMoreIcon fontSize="large" style={{color: "#ff6223"}} />
        </span>
      </li>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul onClick={onClick}>
          <li>
            <NavLink to="/users" className="menu-container__semiBold links">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/merchants">Merchants</NavLink>
          </li>
          <li>
            <NavLink to="/merchant-settings">Merchant Settings</NavLink>
          </li>
          <li>
            <NavLink to="/web-sdk">Web SDK</NavLink>
          </li>
          <li>
            <NavLink to="/demos">Demos</NavLink>
          </li>
          <li onClick={handleLogout}>
            <NavLink to="/login" className="menu-container__semiBold">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
