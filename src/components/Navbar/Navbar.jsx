import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiBarChart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleScroll = (path) => {
    let element = document.getElementById(path);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <nav className="navbar">
        <div>
          <h3 className="logo">Logo</h3>
        </div>

        <div>
          <ul className="nav-links">
            <li onClick={() => handleScroll("home")}>Home</li>
            <li onClick={() => handleScroll("services")}>Services</li>
            <li onClick={() => handleScroll("booknow")}>Booknow</li>
          </ul>
        </div>
        <div className="nav-btn-container">
          <button className="login">
            <Link to="/login">Login</Link>
          </button>
          <button className="sign-up">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>
        <div className="mobile-menu-icon" onClick={() => setShowNav(true)}>
          <FiBarChart />
        </div>
      </nav>
      <div className="nav-sidebar" style={{ right: showNav ? "0" : "-400px" }}>
        <div className="nav-close-icon" onClick={() => setShowNav(false)}>
          <AiOutlineClose />
        </div>
        <ul>
          <li onClick={() => handleScroll("home")}>Home</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("booknow")}>Booknow</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
