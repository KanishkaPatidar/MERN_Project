import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section container">
            <div className="about-split">
                <div className="about-text">
                    <h2 className="blue-heading">Not Your Average Realtor</h2>
                    <p className="gray-text">
                        Real trust is seeing a property's potential, coordinating design, 
                        and effectively marketing to get homeowners top dollar on their sales.
                    </p>
                </div>
                
                <div className="image-collage">
                    <div className="circle-main">
                        <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" alt="Realtor" />
                    </div>
                    <div className="circle-small top">
                        <img src="https://img.freepik.com/free-photo/young-couple-moving-new-home_23-2148007268.jpg" alt="Happy Couple" />
                    </div>
                    <div className="circle-small bottom">
                        <img src="https://img.freepik.com/free-photo/man-holding-house-model_1150-1678.jpg" alt="House Model" />
                    </div>
                    <div className="dot-blue"></div>
                    <div className="dot-orange"></div>
                </div>
            </div>

            <div className="why-choose-us">
                <h2 className="blue-heading center">Why Choose Us?</h2>
                <div className="features-grid">
                
                    <div className="feature-item">
                        <div className="icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4867aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h3>Potential ROI</h3>
                        <p>Whether you are looking to buy a fixer-upper or renovate your current home for sale, we will walk you through potential returns.</p>
                    </div>

                    <div className="feature-item">
                        <div className="icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4867aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                        </div>
                        <h3>Design</h3>
                        <p>Our background in interior design makes us the perfect guide through your design options and coordinating contractors.</p>
                    </div>

                    <div className="feature-item">
                        <div className="icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4867aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h3>Marketing</h3>
                        <p>Strategic marketing, professional photos and a sophisticated digital marketing plan accompany every listing.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;