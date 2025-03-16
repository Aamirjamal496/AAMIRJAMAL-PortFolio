import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import AddProjectModal from '../commons/AddProjectModal'; // AddProjectModal for adding new projects

const ProjectsContent = ({ projects, setProjects }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const addNewProjectToState = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Manage Projects</h2>
        </Col>
        <Col xs="auto">
          <Button variant="success" onClick={() => setShowAddModal(true)}>
            Add Project
          </Button>
        </Col>
      </Row>

      <AddProjectModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onProjectAdded={addNewProjectToState}
      />
    </div>
  );
};

export default ProjectsContent;
