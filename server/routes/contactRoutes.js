const router = require('express').Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { fullName, email, mobile, city } = req.body;

    const newContact = new Contact({
        fullName,
        email,
        mobile,
        city
    });

    try {
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;