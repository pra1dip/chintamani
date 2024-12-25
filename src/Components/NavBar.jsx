import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../Styles/Navbar.css";
import white from "../Assets/NavbarA/white.png"
const NavBar = () => {
 
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact="true" to="/" className="nav-logo" >
          <img src={white} alt="" className="LogoImg" />
            {/* <i className="fa fa-code"></i> */}
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact="true"
                to="/franchies"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                FRANCHISE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact="true"
                to="/gallery"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
               GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact="true"
                to="/contact"
                activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
               CONTACT US
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
};

export default NavBar;
