const db = require('../Models');

module.exports = {
  // getAllMarkers, should be only within a mile radius, within the size of the viewport, changing on expansions/contraction, or just all markers?
  getAllMarkers(req, res) {
    try {
      console.log('hit');
      db.Marker.find({})
        .then(results => res.status(200).json(results))
        .catch(err => res.status(404).json(err));
    } catch (error) {
      res.status(400).json(error);
    }
  },

  placeMarker(req, res) {
    const { body } = req;

    console.log('made marker ' + body.title);

    db.Marker.create(body).catch(err => res.status(400).json(err));
  },

  //
};
