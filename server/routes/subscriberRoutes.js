const router = require('express').Router();
const Subscriber = require('../models/Subscriber');

router.get('/', async (req, res) => {
    try {
        const subs = await Subscriber.find();
        res.json(subs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });
    if (existing) {
        return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSub = new Subscriber({ email });

    try {
        const savedSub = await newSub.save();
        res.json(savedSub);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;