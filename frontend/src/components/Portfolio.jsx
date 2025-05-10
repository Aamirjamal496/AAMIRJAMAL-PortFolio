import React, { useEffect, useState } from 'react'
// import bg from '../assets/bg.jpg';
import { motion } from "framer-motion";
import '../assets/CSS/Portfolio.css';
// import '../assets/CSS/Portfolio.scss';
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
    return <>
        <section className="portfolio-section">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="portfolio-title"
            >
                My Portfolio
            </motion.h2>

            {loading && <p className="portfolio-status">Loading projects...</p>}
            {error && <p className="portfolio-error">{error}</p>}

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="Pcard" key={index} style={{
                        backgroundImage: `url(${project.imageUrl || 'https://via.placeholder.com/400'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}>
                        {/* <div className=''>
                            <img className='h-4' src={project.imageUrl} alt={project.projectTitle} />
                        </div> */}
                        <div className="Pcard-content">
                            <h3 className="Pcard-title">{project.projectTitle || 'Untitled Project'}</h3>
                            <p className="Pcard-body">{project.projectDescription || 'No description provided.'}</p>
                            {project.projectlink && (
                                <a href={project.projectlink} target="_blank" rel="noopener noreferrer" className="button">
                                    Learn More
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

  </>
        // ))}
}

export default Portfolio