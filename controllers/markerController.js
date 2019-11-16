const db = require('../Models');

module.exports = {
  // getAllMarkers, should be only within a mile radius, within the size of the viewport, changing on expansions/contraction, or just all markers?
  getAllMarkers(req, res) {
    console.log("hit")
    db.Marker.find({})
      .then(results => res.status(200).json(results))
      .catch(err => res.status(404).json(err));
  },

  placeMarker(req, res) {

    const {body} = req;

    db.Marker.create(body);
  },

  //
};
