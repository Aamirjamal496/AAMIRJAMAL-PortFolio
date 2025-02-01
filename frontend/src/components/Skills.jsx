import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaPhp } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E44D26" size="3rem" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size="3rem" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size="3rem" /> },
  { name: "React.js", icon: <FaReact color="#61DBFB" size="3rem" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" size="3rem" /> },
  { name: "Php", icon: <FaPhp color="#68A063" size="3rem" /> },
  { name: "MySql", icon: <FaDatabase color="#FF5733" size="3rem" /> },
];
const Skills = () => {
  return (
    <section
      style={{
        backgroundColor: "black",
        color: "#fff",
        padding: "80px 5%",
        textAlign: "center",
      }}
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px" }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", maxWidth: "800px", margin: "0 auto" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
          >
            {skill.icon}
            <span style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills