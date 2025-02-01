import React from 'react'
// import Header from '../../commons/Header.jsx'
import { motion } from "framer-motion";
import Hero from '../../commons/Hero.jsx'
// import AboutC from '../../components/About.jsx'
import '../../App.css';
import Profile from '../../assets/Profile.jpg';

const About = () => {
  return (<>
    {/* <Header/> */}
    <Hero preHeading="Who Am I?"heading="ABOUT"text="Want to create a stunning website then you're at a right place."/>

      {/* About Section */}
      <section className="about-section">
        <div className="container d-flex align-items-center justify-content-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="about-text"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="about-heading"
            >
              About Me
            </motion.h2>

            <p className="about-description">
              I am a passionate Full Stack Developer with expertise in building
              scalable and high-performance web applications. I enjoy working on
              challenging projects that push me to learn and grow. My main goal is
              to create user-friendly and aesthetically pleasing applications that
              provide an excellent user experience. I specialize in modern frontend
              frameworks like React.js and backend technologies like Node.js and
              PHP.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="about-image"
          >
            <img
              src={Profile}
              alt="About Me"
              className="img-fluid rounded shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
    
  )
}

export default About