import React from 'react'
import bg from '../assets/bg.jpg';
import { motion } from "framer-motion";
import '../assets/CSS/Portfolio.css';
const Portfolio = () => {
    const projects = [
      {
        title: "E-Commerce Website",
        img: bg,
        description: "An online store with payment integration and user authentication.",
      },
      {
        title: "Portfolio Website",
        img: bg,
        description: "A personal portfolio to showcase my projects and skills.",
      },
      {
        title: "Blog Platform",
        img: bg,
        description: "A dynamic blog with user authentication and comment system.",
      },
      {
        title: "Social Media App",
        img: bg,
        description: "A social networking site with real-time chat and notifications.",
      },
      {
        title: "Task Management System",
        img: bg,
        description: "A productivity tool to manage tasks with a beautiful UI.",
      },
      {
        title: "AI Chatbot",
        img: bg,
        description: "An AI-powered chatbot that assists users with automated responses.",
      },
    ];
  return (
    
    <section className="section-3  py-2">
                <div className="container py-5">
                    {/* Section Title */}
       <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px",textAlign:'center' }}
      >
         My Portfolio
       </motion.h2>
                    <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={bg} alt="" className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </section>
    
// <section
    //   style={{
    //     backgroundColor: "#222", // Slightly lighter than pure black
    //     color: "#fff",
    //     padding: "80px 5%",
    //     textAlign: "center",
    //   }}
    // >
    //   {/* Section Title */}
    //   <motion.h2
    //     initial={{ opacity: 0, y: -50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1 }}
    //     style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px" }}
    //   >
    //     My Portfolio
    //   </motion.h2>
    //   {/* Cards Grid */}
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       {projects.map((project, index) => (
    //         <motion.div
    //           key={index}
    //           className="col-lg-4 col-md-6 col-sm-12"
    //           initial={{ opacity: 0, scale: 0.8 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           transition={{ duration: 0.5, delay: index * 0.2 }}
    //           whileHover={{ scale: 1.08 }} // Faster hover effect
    //           style={{ marginBottom: "30px" }} // Added space between cards
    //         >
    //           <div
    //             className="card"
    //             style={{
    //               color: "white",
    //               background: "rgba(255, 255, 255, 0.29)", // Glassmorphism effect
    //               backdropFilter: "blur(10px)",
    //               borderRadius: "15px",
    //               padding: "15px",
    //               textAlign: "center",
    //               boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
    //               cursor: "pointer",
    //               overflow: "hidden",
    //               position: "relative",
    //               transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    //             }}
    //           >
    //             {/* Neon Border Animation */}
    //             <motion.div
    //               initial={{ opacity: 0 }}
    //               whileHover={{ opacity: 1 }}
    //               transition={{ duration: 0.3 }}
    //               style={{
    //                 position: "absolute",
    //                 top: "0",
    //                 left: "0",
    //                 width: "100%",
    //                 height: "100%",
    //                 borderRadius: "15px",
    //                 border: "2px solid #00d8ff",
    //                 boxShadow: "0px 0px 10px #00d8ff",
    //                 zIndex: "-1",
    //               }}
    //             ></motion.div>

    //             <img
    //               src={project.img}
    //               alt={project.title}
    //               className="card-img-top"
    //               style={{
    //                 borderRadius: "10px",
    //                 height: "200px",
    //                 objectFit: "cover",
    //                 transition: "transform 0.3s ease-in-out",
    //               }}
    //             />

    //             <div className="card-body">
    //               <h5 className="card-title" style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
    //                 {project.title}
    //               </h5>
    //               <p style={{ fontSize: "0.9rem", opacity: "0.8" }}>{project.description}</p>
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  )
}

export default Portfolio