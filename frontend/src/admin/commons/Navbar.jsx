import React, { useEffect } from "react";
import "../css/Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = ({ isCollapsed, setIsCollapsed }) => {
    const Navigate = useNavigate();
  const Logout= ()=>{
    localStorage.removeItem('auth_token');
    Navigate('/admin');
    // console.log('Logged Out..');
  }
  
  return (
    <nav className="navbar">
      {/* Logo or Toggle Button */}
      {isCollapsed ? (
        <button className="toggle-btn" onClick={() => setIsCollapsed(false)}>
          ☰
        </button>
      ) : (
        <h2 className="navbar-title">Admin Site Dashboard</h2>
      )}

      {/* Login Button */}
      <button onClick={Logout} className="login-btn btn btn-danger">LogOut</button>
    </nav>
  );
};

export default Navbar;
