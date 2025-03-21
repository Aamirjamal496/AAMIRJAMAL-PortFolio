import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.jpg';
import { motion } from "framer-motion";
import '../assets/CSS/Portfolio.css';
import axios from 'axios';
const Portfolio = () => {
    const [projects, setprojects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/gethomeprojects`);
            try {
                setprojects(response.data);
            } catch (err) {
                setError('Failed to load the projects. Please try again later');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);
    return (

        <section className="section-3  py-2">
            <div className="container py-5">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px", textAlign: 'center' }}
                >
                    My Portfolio
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="row pt-4">
                        {projects.map((project, index)=>(
                            <motion.div key={index}
                            className="col-md-4 col-lg-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.08 }}
                            style={{ marginBottom: '30px' }}>

<div className="item">
                                <div className="service-image">
                                    <img src={project.imageUrl || 'path_to_default_image'} alt={project.title}className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>{project.title}</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>{project.description}</p>
                                    </div>
                                    <a href={project.link || '#'} className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default Portfolio