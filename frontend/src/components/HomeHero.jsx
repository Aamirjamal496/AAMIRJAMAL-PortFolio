import React from 'react'
import { motion } from "framer-motion";
import Profile from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <>
    <section
  style={{
    height: "100vh",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    flexDirection: "row", // Default to row on large screens
    flexWrap: "wrap", // Allow wrapping on smaller screens
  }}
>
  {/* Left Section */}
  <div
    style={{
      flex: "1 1 50%", // Ensure this takes up 50% of the space
      marginBottom: "1rem", // Add space on the bottom for small screens
    }}
  >
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{
        fontSize: "4vw", // Use viewport width for responsive font sizing
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      Hi, I'm <span style={{ color: "#00d8ff" }}>AAMIR JAMAL</span>
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        fontSize: "2.5vw", // Make it relative to viewport width
        marginBottom: "1rem",
      }}
    >
      Full Stack Developer
    </motion.h2>
    <motion.a
      href="https://www.linkedin.com/in/aamir-jamal-aj-%F0%9F%8C%90-84183622b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BLmtc1vROSRmflI3Q9O6yaw%3D%3D"
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
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.05 }}
    style={{
      position: "relative",
      height: "30vw", // Make the image container responsive using viewport width
      width: "30vw", // Adjust width based on viewport
      maxHeight: "400px", // Max height to avoid overflow on larger screens
      maxWidth: "400px", // Max width to avoid overflow on larger screens
    }}
  >
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
        border: "12px solid #00d8ff",
        borderRadius: "50%",
        zIndex: "1",
      }}
    ></motion.div>

    {/* Static Image with Animation */}
    <motion.img
      src={Profile} // Ensure this is the correct path for the profile image
      alt="Your Profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover",
        zIndex: "2",
        position: "relative",
        boxShadow: "0 0 20px rgba(0, 216, 255, 0.6)",
      }}
    />
  </motion.div>
</section>

    </>
  )
}

export default Hero