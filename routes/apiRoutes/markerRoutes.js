const router = require('express').Router();
const {markerController} = require('../../controllers');

router.route('/')
  .get(markerController.getAllMarkers)
  .post(markerController.placeMarker);

module.exports = router;
