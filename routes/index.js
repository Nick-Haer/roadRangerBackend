const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.route('/', (req, res) => {
  res.json('Hullo');
});

// router.use("/api/markers/", function (req, res) {
//     res.json("boogaloo")
// })

module.exports = router;
