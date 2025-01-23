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
              <a href="https://jackm88.github.io/Tax_website_Jack/Services/services.html">
                Services
              </a>
            </li>
            <li>
              <a href="https://jackm88.github.io/Tax_website_Jack/Truckers/truckers.html">
                Truckers
              </a>
            </li>
            <li>
              <a href="https://jackm88.github.io/Tax_website_Jack/Resources/resources.html">
                Resources
              </a>
            </li>
            <li>
              <a href="https://jackm88.github.io/Tax_website_Jack/Jobs/jobs.html">
                Careers
              </a>
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
