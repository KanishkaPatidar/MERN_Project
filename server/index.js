const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const multer = require('multer'); 
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir); 
}
app.use('/uploads', express.static(uploadDir));

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://admin:pass123word@cluster0.vurqkhu.mongodb.net/?appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String
});
const Project = mongoose.model('Project', projectSchema);

const clientSchema = new mongoose.Schema({
    name: String,
    designation: String,
    description: String,
    image: String
});
const Client = mongoose.model('Client', clientSchema);

const contactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: String,
    city: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

const subscriberSchema = new mongoose.Schema({
    email: String
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/projects', upload.single('image'), async (req, res) => {
    try {
        const { name, description } = req.body;
        const image = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : ''; 
        const newProject = new Project({ name, description, image });
        await newProject.save();
        res.json(newProject);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/clients', upload.single('image'), async (req, res) => {
    try {
        const { name, designation, description } = req.body;
        const image = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : '';
        const newClient = new Client({ name, designation, description, image });
        await newClient.save();
        res.json(newClient);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json({ message: "Message Sent" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/contact', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/subscribe', async (req, res) => {
    try {
        const newSub = new Subscriber(req.body);
        await newSub.save();
        res.json({ message: "Subscribed" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/subscribe', async (req, res) => {
    try {
        const subs = await Subscriber.find();
        res.json(subs);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));