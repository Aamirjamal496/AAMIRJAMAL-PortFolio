import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddSkillModal = ({ show, handleClose, OnSkillAdded }) => {
  // const [newSkill, setNewSkill] = useState({
  //   name: '',
  //   image: null
  // });
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
     setImage(file);
    }
  };

  const handleSave= async()=>{
    if(!name || !image){
      alert('Skill Name and Image are Required');
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append('name',name);
    if(image){
      formData.append('image',image);
    }
    try {
      const token  = localStorage.getItem('auth_token');
      if(!token){
        alert('No token found please login again');
        return;
      }

      const response = await axios.post('http://127.0.0.1:8000/api/skills',formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.status === 200 || response.status ===201){
        alert('Skill added Successfully');
        setName('');
        setImage(null);
        OnSkillAdded(response.data.skills);
        handleClose();
      }else{
        alert('Failed to add skill. Please check the input and try again');
      }
    } catch (error) {
      console.error('Error adding project:', error.response ? error.response.data : error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form encType='multipart/form-data'>
          <Form.Group className="mb-3">
            <Form.Label>Skill Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName( e.target.value )}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skill Icon</Form.Label>
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
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? 'Saving...':'Save Skill'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSkillModal;
