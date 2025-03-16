import React from 'react'
// import Header from '../../commons/Header'
import Hero from '../../commons/Hero.jsx'
import { motion } from "framer-motion";
import { useState } from 'react';
import Footer from '../../commons/Footer.jsx';
import axios from 'axios';
const ContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const HandleSubmit =async(event)=>{
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // prepare the data to be sent
    const data={
      name:Name,
      email:Email,
      message:Message,
    };
    try{
      const response= await axios.post('http://127.0.0.1:8000/api/contact', data, {
        headers:{
          'Content-Type':'application/json',
        },
      });
      if(response.status ===200 || response.status === 201){
        setSuccessMessage('Your Message Has Been Sent Successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }
    }catch(error){
      setErrorMessage('Failed to send your message. Please try again later.');
      console.error('Error sending message:',error);
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
    <Hero preHeading='Want to contact' heading='Contact Me' text='Contact me by filling and submitting the following Form'/>
<section className="contact-page">
      <motion.div
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Me</h2>
        <form onSubmit={HandleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <motion.input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              value={Name}
              onChange={(event)=>{
                setName(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <motion.input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              value={Email}
              onChange={(event)=>{
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <motion.textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              value={Message}
              onChange={(event)=>{
                setMessage(event.target.value);
              }}
            />
          </div>
          {/* Display success or error message */}
          {successMessage && (
            <div className="alert alert-success" role='alert'>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role='alert'>
              {errorMessage}
            </div>
          )}

          <motion.button
            type="submit"
            className="btn w-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
           {loading ? 'Sending...':'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </section>
    <Footer/>
    </>
  )
}

export default ContactUs