const mongoose = require('mongoose');

const laboratorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  equipment: { type: [String], default: [] },  // List of equipment available in the lab
  location: { type: String, required: true },  // e.g., 'Science Building, Room 204'
  status: { type: String, enum: ['available', 'in use', 'under maintenance'], default: 'available' },  // Is the laboratory available?
});

const Laboratory = mongoose.model('Laboratory', laboratorySchema);

module.exports = Laboratory;
