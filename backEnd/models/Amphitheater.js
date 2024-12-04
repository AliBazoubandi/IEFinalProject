const mongoose = require('mongoose');

const amphitheaterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  location: { type: String, required: true },  // e.g., 'Building A'
  status: { type: String, enum: ['available', 'in use', 'under maintenance'], default: 'available' },  // Is the amphitheater available?
});

const Amphitheater = mongoose.model('Amphitheater', amphitheaterSchema);

module.exports = Amphitheater;
