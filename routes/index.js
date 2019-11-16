const router = require('express').Router();

const apiRoutes = require('./apiRoutes');


router.use("/api", apiRoutes)


// router.use("/api/markers/", function (req, res) {
//     res.json("boogaloo")
// })

module.exports = router;
