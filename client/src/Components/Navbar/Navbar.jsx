import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    
      <div className="container">
        <nav>
          <ul className="ul-head">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Truckers">Truckers</Link>
          </li>
          <li>
            <Link to="/Resources">Resources</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
            <li>
            <Link to="/Contact">Contact</Link>
          </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
