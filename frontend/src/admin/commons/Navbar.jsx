import React from "react";
import "../css/Navbar.css";

const Navbar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <nav className="navbar">
      {/* Logo or Toggle Button */}
      {isCollapsed ? (
        <button className="toggle-btn" onClick={() => setIsCollapsed(false)}>
          ☰
        </button>
      ) : (
        <h2 className="navbar-title">Admin Dashboard</h2>
      )}

      {/* Login Button */}
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
