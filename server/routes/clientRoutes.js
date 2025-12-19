const router = require('express').Router();
const Client = require('../models/Client');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    const { name, designation, description } = req.body;
    const image = req.file ? req.file.path : '';

    const newClient = new Client({
        name,
        designation,
        description,
        image
    });

    try {
        const savedClient = await newClient.save();
        res.json(savedClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;