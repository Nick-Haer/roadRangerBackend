const {userController} = require('../../controllers');

const router = require('express').Router();


router.route('/signup')
.post(userController.userSignup)


router.route('/login')
.post(userController.userLogin)

router.route('/markerList')
.get(userController.verifyToken, userController.listUserMarkers)


module.exports = router;
