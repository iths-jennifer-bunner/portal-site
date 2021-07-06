import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DropdownMenu from "./DropdownMenu.js";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <NavLink to="/search" className="navbar__logo">
            <img
              src="/images/ZS_Orange_horisontal@4x.png"
              alt="Logo"
              className="navbar__image"
            ></img>
          </NavLink>
          <ul className="navbar__menu">
            <li className="navbar__item navbar__links--Effects">
              <NavLink to="/search" className="navbar__links ">
                Search
              </NavLink>
            </li>
            {/* <li className="navbar__item  navbar__links--Effects"> */}
            {/* <Link to="/administration" className="navbar__links">
                Administration
                <ExpandMoreIcon fontSize="large" />
              </Link> */}
            <DropdownMenu />
            {/* </li> */}
            <li className="navbar__item ">
              <NavLink to="/new-session" className="navbar__links">
                <p className="navbar__titleBorder">Create New Session</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
