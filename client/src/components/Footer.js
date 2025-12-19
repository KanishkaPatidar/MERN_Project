import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) return alert('Please enter an email address');
        axios.post('https://mern-project-v4vj.onrender.com/api/subscribe', { email })
            .then(() => {
                alert('Subscribed Successfully!');
                setEmail('');
            })
            .catch(() => alert('Subscription failed.'));
    };

    return (
        <footer className="footer-blue">
            <div className="container footer-content">
                
                <div className="footer-nav">
                    <a href="/">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#clients">Testimonials</a>
                    <a href="#contact">Contact</a>
                    <a href="#subscribe">Subscribe</a>
                </div>

                <div className="footer-subscribe">
                    <span style={{marginRight: '15px', fontWeight: '500'}}>Subscribe Us</span>
                    <input 
                        type="email" 
                        placeholder="Enter Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>

            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <p>© 2025 Task. All rights reserved.</p>
                    <div className="social-icons">
                        <span>⚪</span><span>⚪</span><span>⚪</span><span>⚪</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;