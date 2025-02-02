import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaProjectDiagram, FaEnvelope, FaTools, FaBars, FaSignOutAlt } from "react-icons/fa";
import "./css/DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          
        </div>
        <ul className="sidebar-menu">
          <li><FaUser /> Profile</li>
          <li><FaProjectDiagram /> Projects</li>
          <li><FaTools /> Skills</li>
          <li><FaEnvelope /> Messages</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navbar */}
        <nav className="top-navbar">
        <button className="toggle-btn bg-dark p-2 rounded-2" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
          <h4>Admin Dashboard</h4>
          <button className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </nav>

        {/* Dynamic Content */}
        <div className="content-area">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
