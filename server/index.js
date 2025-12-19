const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://admin:pass123word@cluster0.vurqkhu.mongodb.net/?appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/subscribe', require('./routes/subscriberRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));