//initialie frameworks
const router = require('express').Router();
const fs = require('fs');
const {Exercise} = require('../models/index.js')


router.post('/savedExercise', async (req, res) => {
    try{
        const savedExercise = Exercise.create(req.body);
        res.json(savedExercise);
    }
    catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

module.exports = router;