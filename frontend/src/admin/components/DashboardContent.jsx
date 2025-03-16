import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

const DashboardContent = ({ projects = [], skills = [], messages = [] }) => {
  const recentProjects = projects.slice(-3).reverse(); // Get recent projects (last 3)
  const recentMessages = messages.slice(-3).reverse(); // Get recent messages (last 3)

  return (
    <div className='translateY(-50%)'>
      <h2 className="mb-4">Dashboard Overview</h2>

      {/* Stats Cards */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-light bg-primary p-1">Total Projects</Card.Title>
              <div className="d-flex align-items-center">
                <h1 className="display-4 me-3">{projects.length}</h1>
                <span className="text-muted">Active Projects</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-light bg-success p-1">Skills</Card.Title>
              <div className="d-flex align-items-center">
                <h1 className="display-4 me-3">{skills.length}</h1>
                <span className="text-muted">Technical Skills</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-light bg-warning p-1">Messages</Card.Title>
              <div className="d-flex align-items-center">
                <h1 className="display-4 me-3">{messages.length}</h1>
                <span className="text-muted">Total Messages</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Projects */}
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Projects</Card.Title>
              <Table striped hover className="mb-0">
                <tbody>
                  {recentProjects.length > 0 ? (
                    recentProjects.map((project) => (
                      <tr key={project.id}>
                        <td>
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                              className="me-2"
                            />
                          ) : (
                            <img
                              src="/path/to/default-image.jpg"
                              alt="No image"
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            />
                          )}
                          {project.title}
                        </td>
                        <td className="text-end">
                          <span className="badge bg-primary">{project.status}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No recent projects available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Messages */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Messages</Card.Title>
              <div className="message-list">
                
                {recentMessages.map((message) => (
                  <div key={message.id} className="d-flex mb-3">
                    <div className="flex-grow-1">
                      {/* <div className="fw-bold">{message.name}</div> */}
                      <div className="text-muted small">{message.email}</div>
                      {/* <div className="text-truncate" style={{ maxWidth: '200px' }}>
                        {message.message}
                      </div> */}
                    </div>
                    <div className="text-muted small ms-3">
                      {new Date(message.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContent;
