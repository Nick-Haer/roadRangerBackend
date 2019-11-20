const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarkerSchema = new Schema({
  latitude: {type: Number, required: true, unique: true},
  longitude: {type: Number, required: true},
  title: {type: String, required: true},
  classification: {type: String},
  description: {type: String},
  dateAdded: {type: Date, default: Date.now, required: true},
  updatedAt: {type: Date},
  active: {type: Boolean, default: true, required: true},
  upVotes: {type: Number, default: 0},
  downVotes: {type: Number, default: 0},
});

const Marker = mongoose.model('Marker', MarkerSchema);

module.exports = Marker;
