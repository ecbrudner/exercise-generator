const router = require('express').Router();
const { Exercise } = require('../../models');

router.post('/save', async (req, res) => {
    try {
        const { bodyPart, equipment, gifUrl, name } = req.body;
        const dbExerciseData = await Exercise.create({ bodyPart, 
            equipment, 
            gifUrl, 
            name});
        
        res.status(200).json(dbExerciseData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

module.exports = router;