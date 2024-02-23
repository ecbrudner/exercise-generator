const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const exerciseRoutes = require('./exerciseRoutes');


//middleware
router.use('/users', userRoutes);
// router.use('/exercises', exerciseRoutes);

module.exports = router;