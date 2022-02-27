import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./assets/logo.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container" >
          <NavLink exact to="/" className="nav-logo">
          <img className="logo" src={logo} alt="" style={{padding: '5px', height:100, width:200}}/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/donation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Crowdfunding
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/create"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/transaction"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <LoginButton />
              <LogoutButton />
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
