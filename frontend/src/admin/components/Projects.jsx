import React, { useEffect, useState } from 'react';
import {Row, Col, Card, Button, Table, Spinner } from 'react-bootstrap';
import AddProjectModal from '../commons/AddProjectModal'; // AddProjectModal for adding new projects
import axios from 'axios';
import '../css/Dashboard.css';
const ProjectsContent = ({  setProjects }) => {
  const [projects, setProjectState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const token = localStorage.getItem('auth_token');
  useEffect(()=>{
    const fetchProjects = async()=>{
      try{
        if(!token){
          setError('Authentication token is missing.');
          return;
        }
        const response = await axios.get(`http://127.0.0.1:8000/api/getprojects?page=1`,{
          headers:{
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.data && Array.isArray(response.data)){
          setProjectState(response.data);
        }else{
          setProjectState([]);
        }
        return;
      }catch(err){
        setError('Failed to fetch Projects, Please try again later.');
        console.error('Error fetching projects',  error);
      }finally{
        setLoading(false);
      }
    }
    fetchProjects();
  },[token]);
  
  const handleDeleteProject = async(ProjectId)=>{
    confirm('Are You sure to delete');
    try{
      const response = await axios.delete(`http://127.0.0.1:8000/api/deleteProject/${ProjectId}`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
      );
      if(response.status ===201){
        setProjectState(projects.filter(project => project.id !== ProjectId));
      }
    }catch(err){
      console.error('Error deleting Project',err);
      alert('Failed to delete the project');
    }
  }

  const addNewProjectToState = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (error) return <h3 className='text-danger text-center'>{error}</h3>;

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

      {/* Display Projects as Cards */}
      <Row className="g-4">
        {projects.length > 0 ? (
        projects.map((project) => (
          <Col key={project.id} md={4} sm={6} xs={12}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.imageUrl || 'path/to/default/image.jpg'} // Default image if no image available
                alt={project.projectTitle}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }} // Ensuring the image fits in the card
              />
              <Card.Body>
                <Card.Title className="card-title">{project.projectTitle}</Card.Title>
                <Card.Text className="card-text">{project.projectDescription}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button variant="danger" onClick={()=> handleDeleteProject(project.id)}  className="w-100">
                  Delete Project
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))
      )  : (
        <p>No Projects Available</p>
      )}
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
