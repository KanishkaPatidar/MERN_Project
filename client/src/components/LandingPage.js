import React from 'react';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import Projects from './Projects';
import Clients from './Clients';
import ContactForm from './ContactForm'; 
import LearnMoreSection from './LearnMoreSection'; 
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <header className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Consultation,<br/>Design,<br/>& Marketing</h1>
                    </div>
                    <div className="hero-form-container">
                        <ContactForm />
                    </div>
                </div>
            </header>

            <AboutSection />
            <Projects />
            <Clients />
            
            <LearnMoreSection /> 
            
            <Footer />
        </div>
    );
};

export default LandingPage;