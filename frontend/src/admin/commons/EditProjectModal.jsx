import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditProjectModal = ({ show, handleClose, project, handleSave }) => {
  const [editedProject, setEditedProject] = useState({
    title: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    if (project) {
      setEditedProject(project);
    }
  }, [project]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProject({ ...editedProject, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              value={editedProject.title}
              onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={editedProject.description}
              onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Project Image</Form.Label>
            {editedProject.image && (
              <div className="mb-2">
                <img
                  src={editedProject.image}
                  alt="Current"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </div>
            )}
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSave(editedProject); // Pass save logic later
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProjectModal;
