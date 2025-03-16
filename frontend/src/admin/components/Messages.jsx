import React, { useEffect } from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

const MessagesContent = ({ setMessages }) => {
  const [messages, setMessagesState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('auth_token');
  // const messageList = Array.isArray(messages) ? messages : [];

  // Fetch Messages from API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!token) {
          setError('Authentication token is missing.');
          return;
        }
        const response = await axios.get('http://127.0.0.1:8000/api/messages/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        // If messages are fetched from API, update the state
        if (response.data && Array.isArray(response.data)) {
          setMessagesState(response.data);
        } else {
          setMessagesState([]);
        }
        // setMessages(response.data.messages);
      } catch (error) {
        setError('Failed to fetch messages. Please try again later.');
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // const formatDate=(dateString)=>{
  //   const date = new Date(dateString);
  //   if(isNaN(date)){
  //     return 'Invalid Date';
  //   }
  //   return date.toLocaleDateString();
  // };
  const handleDeleteMessage = async(messageId) => {
    // setMessages(messages.filter(message => message.id !== messageId));
    try{
      const response = await axios.delete(`http://127.0.0.1:8000/api/delete/${messageId}`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      });
      // console.log(response);
      // return;
      if(response.status ===200){
        setMessagesState(messages.filter(message => message.id !== messageId));
      }
    }catch(err){
      console.error('Error deleting message',err);
      alert('Failed to delete the message');
    }
  };
  if (loading) return <div>Loading messages...</div>;
  if (error) return <h3 className='text-danger text-center'>{error}</h3>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Messages ({messages.length})</h2>
        <Badge bg="info" className="ms-2">
          New: {messages.filter(msg => !msg.read).length}
        </Badge>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length > 0 ? (
          messages.map(message => (
            <tr key={message.id} className={!message.read ? 'fw-bold' : ''}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
              <td>{new Date(message.created_at).toLocaleDateString()}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteMessage(message.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
         ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">No messages available</td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  );
};

export default MessagesContent;