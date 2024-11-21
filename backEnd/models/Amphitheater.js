const mongoose = require('mongoose');

const amphitheaterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  location: { type: String, required: true },  // e.g., 'Building A'
  availability: { type: Boolean, default: true },  // Is the amphitheater available?
});

const Amphitheater = mongoose.model('Amphitheater', amphitheaterSchema);

module.exports = Amphitheater;
