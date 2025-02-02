import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import "../css/sidebar.css"; // External CSS for styling

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsCollapsed(false); // Expand sidebar on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        {!isCollapsed && <h3 className="logo">Admin Panel</h3>}
        {isMobile && (
          <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
            <FaBars />
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      <ul className="menu">
        <li>
          <FaHome />
          {!isCollapsed && <span>Dashboard</span>}
        </li>
        <li>
          <FaProjectDiagram />
          {!isCollapsed && <span>Projects</span>}
        </li>
        <li>
          <FaUser />
          {!isCollapsed && <span>Profile</span>}
        </li>
        <li>
          <FaEnvelope />
          {!isCollapsed && <span>Messages</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
