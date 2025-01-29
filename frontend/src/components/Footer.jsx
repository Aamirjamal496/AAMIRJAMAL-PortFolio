import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    // Smooth scrolling function
  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navbar height if needed
        behavior: "smooth",
      });
    }
  };
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "50px 5%",
        textAlign: "center",
        borderTop: "2px solid #00d8ff",
      }}
    >
      {/* Footer Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        Let's Connect
      </motion.h2>

      {/* Social Media Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
        {[
          { icon: <FaFacebook />, link: "https://facebook.com" },
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaTwitter />, link: "https://twitter.com" },
          { icon: <FaGithub />, link: "https://github.com" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, color: "#00d8ff" }}
            style={{
              fontSize: "1.8rem",
              color: "#fff",
              textDecoration: "none",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer Navigation Links with Smooth Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="footer-links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          fontSize: "1rem",
        }}
      >
        {["Home", "About", "Portfolio", "Contact"].map((text, index) => (
          <motion.button
            key={index}
            onClick={() => handleSmoothScroll(text.toLowerCase())}
            whileHover={{ scale: 1.1, color: "#00d8ff" }}
            style={{
              color: "#aaa",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              textDecoration: "none",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {text}
          </motion.button>
        ))}
      </motion.div>

      {/* Copyright Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ marginTop: "30px", fontSize: "0.9rem", opacity: "0.7" }}
      >
        &copy; {new Date().getFullYear()} Aamirjamal. All rights reserved.
      </motion.p>
    </footer>
  )
}

export default Footer