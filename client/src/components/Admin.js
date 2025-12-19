import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('projects');
    
    const [projectForm, setProjectForm] = useState({ name: '', description: '', image: null });
    const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: null });
    
    const [messages, setMessages] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    const handleProjectChange = (e) => setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
    const handleProjectImage = (e) => setProjectForm({ ...projectForm, image: e.target.files[0] });

    const submitProject = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', projectForm.name);
        formData.append('description', projectForm.description);
        formData.append('image', projectForm.image);

        try {
            await axios.post('http://localhost:5000/api/projects', formData);
            alert('Project Added Successfully!');
            setProjectForm({ name: '', description: '', image: null }); 
        } catch (err) {
            alert('Failed to add project');
            console.error(err);
        }
    };

    const handleClientChange = (e) => setClientForm({ ...clientForm, [e.target.name]: e.target.value });
    const handleClientImage = (e) => setClientForm({ ...clientForm, image: e.target.files[0] });

    const submitClient = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', clientForm.name);
        formData.append('designation', clientForm.designation);
        formData.append('description', clientForm.description);
        formData.append('image', clientForm.image);

        try {
            await axios.post('http://localhost:5000/api/clients', formData);
            alert('Client Added Successfully!');
            setClientForm({ name: '', designation: '', description: '', image: null });
        } catch (err) {
            alert('Failed to add client');
            console.error(err);
        }
    };

    useEffect(() => {
        if (activeTab === 'messages') {
            axios.get('http://localhost:5000/api/contact')
                .then(res => setMessages(res.data))
                .catch(err => console.error(err));
        }
        if (activeTab === 'subscribers') {
            axios.get('http://localhost:5000/api/subscribe')
                .then(res => setSubscribers(res.data))
                .catch(err => console.error(err));
        }
    }, [activeTab]);

    return (
        <div className="admin-container">
            <div className="sidebar">
                <h2 style={{ marginBottom: '30px' }}>Admin Panel</h2>
                <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Add Projects</button>
                <button className={activeTab === 'clients' ? 'active' : ''} onClick={() => setActiveTab('clients')}>Add Clients</button>
                <button className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>View Messages</button>
                <button className={activeTab === 'subscribers' ? 'active' : ''} onClick={() => setActiveTab('subscribers')}>View Subscribers</button>
                <br />
                <Link to="/" style={{ color: '#ccc', textDecoration: 'none', paddingLeft: '15px' }}>← Back to Website</Link>
            </div>

            <div className="admin-content">
                
                {activeTab === 'projects' && (
                    <div style={{ maxWidth: '600px' }}>
                        <h2>Add a New Project</h2>
                        <form onSubmit={submitProject} className="contact-form">
                            <input type="text" name="name" placeholder="Project Name" value={projectForm.name} onChange={handleProjectChange} required />
                            <textarea 
                                name="description" 
                                placeholder="Project Description" 
                                value={projectForm.description} 
                                onChange={handleProjectChange} 
                                rows="4"
                                style={{ padding: '15px', borderRadius: '5px', border: 'none', width: '100%' }}
                                required 
                            />
                            <label>Project Image:</label>
                            <input type="file" onChange={handleProjectImage} required />
                            <button type="submit" className="btn btn-primary">Upload Project</button>
                        </form>
                    </div>
                )}

                {activeTab === 'clients' && (
                    <div style={{ maxWidth: '600px' }}>
                        <h2>Add a Happy Client</h2>
                        <form onSubmit={submitClient} className="contact-form">
                            <input type="text" name="name" placeholder="Client Name" value={clientForm.name} onChange={handleClientChange} required />
                            <input type="text" name="designation" placeholder="Designation (e.g. CEO)" value={clientForm.designation} onChange={handleClientChange} required />
                            <textarea 
                                name="description" 
                                placeholder="Client Review / Testimonial" 
                                value={clientForm.description} 
                                onChange={handleClientChange} 
                                rows="3"
                                style={{ padding: '15px', borderRadius: '5px', border: 'none', width: '100%' }}
                                required 
                            />
                            <label>Client Image:</label>
                            <input type="file" onChange={handleClientImage} required />
                            <button type="submit" className="btn btn-primary">Add Client</button>
                        </form>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div>
                        <h2>Contact Inquiries</h2>
                        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                            {messages.length === 0 ? <p>No messages yet.</p> : messages.map((msg) => (
                                <div key={msg._id} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                    <h4>{msg.fullName}</h4>
                                    <p style={{ color: '#666' }}>{msg.email} | {msg.mobile}</p>
                                    <p style={{ marginTop: '5px' }}><strong>City:</strong> {msg.city}</p>
                                    <small style={{ color: '#999' }}>Received: {new Date(msg.date).toLocaleDateString()}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'subscribers' && (
                    <div>
                        <h2>Newsletter Subscribers</h2>
                        <ul style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '8px' }}>
                            {subscribers.length === 0 ? <p>No subscribers yet.</p> : subscribers.map((sub) => (
                                <li key={sub._id} style={{ padding: '10px', borderBottom: '1px solid #eee', listStyle: 'none' }}>
                                    {sub.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;