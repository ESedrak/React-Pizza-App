import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

//npm install @material-ui/core and npm install @material-ui/icons
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar(props) {
  //create a useState and set initial value to false;
  const [openLinks, setOpenLinks] = useState(false);

  // create an arrow function for button
  const toggleNavbar = () => {
    // this is opposite of openLinks start vaule, if openLinks is fales, then this will be true
    setOpenLinks(!openLinks);

  };
  return (
    //Link to different pages
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"} > {/* Use ternary operator, if openLinks is true , id will be "open", otherwise "close"*/}
        <img src={logo} style={{ borderRadius: "50%" }} />
        <div className="hiddenLinks">
          <Link to="/Home"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>

    </div>

  );
}

export default Navbar;


