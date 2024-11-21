const mongoose = require('mongoose');

const lockerSchema = new mongoose.Schema({
  lockerNumber: { type: String, required: true, unique: true },  // e.g., 'Locker 10'
  location: { type: String },  // e.g., 'Locker Area 1'
  isOccupied: { type: Boolean, default: false },
});

const Locker = mongoose.model('Locker', lockerSchema);

module.exports = Locker;
