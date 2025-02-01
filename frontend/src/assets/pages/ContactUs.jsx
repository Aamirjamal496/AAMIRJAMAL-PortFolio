import React from 'react'
// import Header from '../../commons/Header'
import Hero from '../../commons/Hero.jsx'
import { motion } from "framer-motion";
import { useState } from 'react';
const ContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const HandleSubmit =()=>{
    console.log(Name,Email,Message);
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
        <form action={HandleSubmit()}>
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
              onChange={(event)=>{
                setMessage(event.target.value);
              }}
            />
          </div>

          <motion.button
            type="submit"
            className="btn w-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
    </>
  )
}

export default ContactUs