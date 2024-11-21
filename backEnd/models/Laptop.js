const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  brand: { type: String, required: true },  // e.g., 'Apple'
  model: { type: String, required: true },  // e.g., 'MacBook Pro'
  specifications: { type: String },  // e.g., 'Intel i7, 16GB RAM'
  status: { type: String, enum: ['available', 'in use', 'under maintenance'], default: 'available' },
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
