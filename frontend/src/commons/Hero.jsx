import React from 'react'
import { motion } from "framer-motion";
import Profile from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <>
    {/* Hero section */}
  <section
  style={{
    height: "88vh",
    // background: "linear-gradient(to right, #f0f0f0 50%, #ffffff 50%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
  }}
>
  {/* Left Section */}
  <div>
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{ fontSize: "3rem", fontWeight: "bold" }}
    >
      Hi, I'm <span style={{ color: "#00d8ff" }}>AAMIR JAMAL</span>
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      style={{ fontSize: "2rem", marginBottom: "1rem" }}
    >
      Experienced Web Developer
    </motion.h2>
    <motion.a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.4 }}
      className="btn btn-outline-info"
      style={{ fontSize: "1.2rem" }}
    >
      Connect on LinkedIn
    </motion.a>
  </div>

  {/* Right Section */}
  <div style={{ position: "relative", height: "300px", width: "300px" }}>
    {/* Rotating Border */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        border: "12px solid #00d8ff",  // Increased border thickness
        borderRadius: "50%",
        zIndex: "2", // Make sure the border rotates behind the image
      }}
    ></motion.div>

    {/* Static Image */}
    <img
      src={Profile} // Ensure this is the correct path for the profile image
      alt="Your Profile"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover",
        zIndex: "2", // Ensure the image appears above the border
        position: "relative",
      }}
    />
  </div>
</section>
    </>
  )
}

export default Hero