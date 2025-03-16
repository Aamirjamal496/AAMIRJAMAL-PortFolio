import React from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const Sidebar = ({ activeSection, setActiveSection, showSidebar, setShowSidebar }) => {
  return (
    <Offcanvas
      show={showSidebar}
      onHide={() => setShowSidebar(false)}
      responsive="lg"
      className="border-end"
      style={{ width: '280px' }}
    >
      <Offcanvas.Header closeButton className="d-lg-none">
        <Offcanvas.Title>Portfolio Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <div className="d-flex flex-column h-100">
          <div className="p-3 border-bottom">
            <h4 className="mb-0">Your Portfolio</h4>
          </div>
          
          <nav className="nav flex-column flex-grow-1 p-3">
            {['dashboard', 'projects', 'skills', 'messages'].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'primary' : 'light'}
                onClick={() => {
                  setActiveSection(section);
                  setShowSidebar(false);
                }}
                className="mb-2 text-start w-100 text-capitalize"
              >
                {section.replace('-', ' ')}
              </Button>
            ))}
          </nav>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;