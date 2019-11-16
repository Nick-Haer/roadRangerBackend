const router = require('express').Router();

const markerRoutes = require('./markerRoutes');

const userRoutes = require('./userRoutes');

router.use('/markers', markerRoutes);

router.use('/users', userRoutes);

//also needs user routes, correct way of doing this?

module.exports = router;
