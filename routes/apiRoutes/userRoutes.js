const {userController} = require('../../controllers');

const router = require('express').Router();


router.route('/')
.get(userController.userLogin)
.post(userController.userSignup)

router.route('/markerList')
.get(userController.verifyToken, userController.listUserMarkers)


module.exports = router;
