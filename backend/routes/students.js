const express = require('express');
const Student = require('../models/student');
const router = express.Router();

router.post('students', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;