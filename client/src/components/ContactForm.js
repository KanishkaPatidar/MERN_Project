import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '', email: '', mobile: '', city: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://mern-project-v4vj.onrender.com/api/contact', formData)
            .then(() => {
                alert('Request Sent Successfully!');
                setFormData({ fullName: '', email: '', mobile: '', city: '' });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="contact-card">
            <h2>Get a Free <br/> Consultation</h2>
            <form className="form-inputs" onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} required />
                <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                <input type="text" name="city" placeholder="Area, City" value={formData.city} onChange={handleChange} required />
                
                <button type="submit" className="btn-submit-quote">Get Quick Quote</button>
            </form>
        </div>
    );
};

export default ContactForm;