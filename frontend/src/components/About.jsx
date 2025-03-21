import React from 'react'
import Profile from '../assets/Profile.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
    <section
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "80px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className='about-image'
        // style={{
        //   flex: "1",
        //   minWidth: "300px",
        //   maxWidth: "400px",
        //   textAlign: "center",
        //   marginBottom: "20px",
        // }}
      >
        <img
          src={Profile} // Replace with your actual image
          alt="About Me"
          className='img-fluid rounded-circle'
          style={{
            // width: "100%",
            // borderRadius: "15px",
            boxShadow: "0 0 15px rgba(0, 216, 255, 0.6)",
          }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='about-text'
        // style={{
        //   flex: "1",
        //   minWidth: "300px",
        //   maxWidth: "600px",
        //   textAlign: "justify",
        //   lineHeight: "1.8",
        //   padding: "0 20px",
        //   position: "relative",
        // }}
      >
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='about-heading'
          // style={{
          //   fontSize: "2.5rem",
          //   fontWeight: "bold",
          //   textAlign: "center",
          //   marginBottom: "20px",
          // }}
        >
          About Me
        </motion.h2>

        {/* Inverted Triangle Text */}
        <p
        className='about-description'
          // style={{
          //   // clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          //   backgroundColor: "#222",
          //   padding: "20px",
          //   borderRadius: "10px",
          //   boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
          // }}
        >
          I am a passionate Full Stack Developer with expertise in building
          scalable and high-performance web applications. I enjoy working on
          challenging projects that push me to learn and grow. My main goal is
          to create user-friendly and aesthetically pleasing applications that
          provide an excellent user experience. I specialize in modern frontend
          frameworks like React.js and backend technologies like Node.js and
          PHP.
        </p>
      </motion.div>
    </section>
    </>
  )
}

export default About