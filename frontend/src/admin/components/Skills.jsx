import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import AddSkillModal from '../commons/AddSkillModal';

const SkillsContent = ({ skills, setSkills }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const addNewSkillToState = (newSkill) => {
    setSkills((prevSkill) => [...prevSkills, newSkill]);
  };

  return (
    <div>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Manage Skills</h2>
        </Col>
        <Col xs="auto">
          <Button variant="success" onClick={() => setShowAddModal(true)}>
            Add Skill
          </Button>
        </Col>
      </Row>

      {/* <Row className="g-3">
        {skills.map((skill, index) => (
          <Col md={3} key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                {skill.image && (
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="mb-2"
                    style={{ width: '50px', height: '50px' }}
                  />
                )}
                <h5 className="mb-0">{skill.name}</h5>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="mt-2"
                  // Placeholder for backend logic
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      <AddSkillModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        // Pass the logic for saving the new skill to backend
        onSkillAdded={addNewSkillToState}
      />
    </div>
  );
};

export default SkillsContent;
