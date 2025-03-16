import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import Sidebar from './commons/Sidebar';
import Navbar from './commons/Navbar.jsx';
import DashboardContent from './components/DashboardContent.jsx'; // Dashboard overview
import ProjectsContent from './components/Projects.jsx'; // Projects section
import SkillsContent from './components/Skills.jsx'; // Skills section
import MessagesContent from './components/Messages.jsx'; // Messages section
import axios from 'axios';

const PortfolioDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard'); // Default to dashboard

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch data when the component mounts
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const token = localStorage.getItem('auth_token');
        if(!token){
          setError('Authentication token is missing.');
          return;
        }
        // Fetch projects
        // const projectResponse = await axios.get('http://127.0.0.1:8000/api/projects',{
        //   headers:{Authorization: `Bearer ${token}`}
        // });
        // Fetch skills
        // const skillsResponse= await axios.get('http://127.0.0.1:8000/api/skills',{
        //   headers:{Authorization: `Bearer ${token}`}
        // });
        // Fetch Messages
        const messagesResponse= await axios.get('http://127.0.0.1:8000/api/messages',{
          headers:{Authorization: `Bearer ${token}`}
        });
        // Update state with fetched data
        // setProjects(projectResponse.data.projects);
        // setSkills(skillsResponse.data.skills);
        setMessages(messagesResponse.data || []);
        // console.log(messagesResponse);
      }catch(err){
        setError('Failed to fetch  data.PLease try again later.');
        console.error(err);        
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent projects={projects} skills={skills} messages={messages} />;
      case 'projects':
        return <ProjectsContent projects={projects} setProjects={setProjects} />;
      case 'skills':
        return <SkillsContent skills={skills} setSkills={setSkills} />;
      case 'messages':
        return <MessagesContent messages={messages}  setMessages={setMessages}/>;
      default:
        return <DashboardContent projects={projects} skills={skills} messages={messages} />;
    }
  };
  if(loading){
    return <div>Loading data...</div>;
  }
  if(error){
    return <div>{error}</div>;
  }

  return (
    <div className="min-vh-100 d-flex bg-light zindex-1 mt-5">
      <Button
        variant="light"
        onClick={() => setShowSidebar(true)}
        className="d-lg-none position-fixed m-3"
        style={{ zIndex: 1000 }}
      >
        <List size={24} />
      </Button>

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <main className="flex-grow-1 p-4" style={{ marginLeft: '280px' }}>
        <div className="d-lg-none" style={{ height: '60px' }}></div>
        <Navbar />
        {renderSection()}
      </main>
    </div>
  );
};

export default PortfolioDashboard;
