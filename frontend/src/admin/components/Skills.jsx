import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Table, Spinner } from 'react-bootstrap';
import AddSkillModal from '../commons/AddSkillModal';
import axios from 'axios';

const SkillsContent = ({  setSkills }) => {
  const [skills, setSkillsState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const token = localStorage.getItem('auth_token');
  useEffect(()=>{
    const fetchSkills = async()=>{
      try{
        if(!token){
          setError('Authentication token is missing.');
          return;
        }
        const response = await axios.get(`http://127.0.0.1:8000/api/getskills`,{
          headers:{
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.data && Array.isArray(response.data)){
          setSkillsState(response.data);
        }else{
          setSkillsState([]);
        }
      }catch(err){
        setError('Failed to fetch skills, Please try again later.');
        console.error('Error fetching messages',  error);
      }finally{
        setLoading(false);
      }
    }
    fetchSkills();
  },[]);
  const handleDeleteSkill =async(skillId)=>{
    confirm('Are You Sure You Want To Delete Skill');
    try{      
      const response = await axios.delete(`http://127.0.0.1:8000/api/deleteSkill/${skillId}`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      });
      if(response.status ===201){
        setSkillsState(skills.filter(skill => skill.id !== skillId));
      }
    }catch(err){
      console.error('Error deleting skill', err);
      alert('Failed to delete the skill');
    }
  }

  const addNewSkillToState = (newSkill) => {
    setSkills((prevSkill) => [...prevSkill, newSkill]);
  };
  if (loading) return <div className='d-flex justify-content-center'><Spinner animation='border' variant='primary'/></div>;
  if (error) return <h3 className='text-danger text-center'>{error}</h3>;
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
      <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Skill Icon</th>
                  <th>Skill Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.length > 0 ? (
                skills.map(skill => (
                  <tr key={skill.id} className={!skill.read ? 'fw-bold' : ''}>
                    {/* Assuming skill.image.file contains the filename */}
                  <td>
                  <img
                    src={skill.imageUrl || 'path/to/default/image.jpg'} // Correct image path
                    alt={skill.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Styling the image
                  />
                  </td>
                    {/* <td>{skill.image}</td> */}
                    <td>{skill.name}</td>
                    <td>{new Date(skill.created_at).toLocaleDateString()}</td>
                    
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteSkill(skill.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
               ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No Skills available</td>
                </tr>
              )}
              </tbody>
            </Table>

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
