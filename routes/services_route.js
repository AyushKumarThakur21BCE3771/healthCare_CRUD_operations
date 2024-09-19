const express = require('express');
const router = express.Router();
const Service = require('../models/services_model');

// Get all services
router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Add a new service
router.post('/services', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !price) return res.status(400).json({ msg: 'Name and Price are required.' });

        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Update a service
router.put('/services/:id', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const service = await Service.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true });
        if (!service) return res.status(404).json({ msg: 'Service not found' });

        res.json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a service
router.delete('/services/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) return res.status(404).json({ msg: 'Service not found' });

        res.json({ msg: 'Service deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;