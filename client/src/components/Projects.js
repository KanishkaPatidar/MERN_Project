import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://mern-project-v4vj.onrender.com/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section id="projects" className="container">
            <h2 className="section-title">Our Projects</h2>
            
            <p className="section-desc">
                We take pride in our diverse portfolio. From residential renovations to commercial 
                developments, we are committed to delivering excellence in every detail. 
                Explore our latest work below.
            </p>

            {projects.length === 0 ? (
                <div className="no-data-message">
                    <h3>There are no projects now</h3>
                    <p>Please check back later for updates.</p>
                </div>
            ) : (
                <div className="grid">
                    {projects.map((project) => (
                        <div key={project._id} className="card">
                            <img src={`https://mern-project-v4vj.onrender.com/${project.image}`} alt={project.name} />
                            <div className="card-content">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <br/>
                                <button className="btn btn-primary" style={{opacity: 0.7, cursor: 'not-allowed'}}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;