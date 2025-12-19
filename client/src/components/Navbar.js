import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h2>Task</h2>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="#services">Services</Link>
                    <Link to="#projects">Projects</Link>
                    <Link to="#clients">Testimonials</Link>
                    <Link to="#contact">Contact</Link>
                    <Link to="/admin" style={{color: '#ffd700'}}>Admin</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;