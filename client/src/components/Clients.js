import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/clients')
            .then(res => setClients(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section id="clients" className="container">
            <h2 className="section-title">Happy Clients</h2>

            <p className="section-desc">
                Our clients are at the heart of everything we do. We strive to exceed expectations 
                and build lasting relationships. Here is what they have to say about working with us.
            </p>

            {clients.length === 0 ? (
                <div className="no-data-message">
                    <h3>There are no clients to show now</h3>
                </div>
            ) : (
                <div className="grid">
                    {clients.map((client) => (
                        <div key={client._id} className="client-card">
                            <img 
                                src={`http://localhost:5000/${client.image}`} 
                                alt={client.name} 
                                className="client-img"
                            />
                            <div className="card-content">
                                <p style={{fontStyle: 'italic'}}>"{client.description}"</p>
                                <h4 className="client-name">{client.name}</h4>
                                <span className="client-role">{client.designation}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Clients;