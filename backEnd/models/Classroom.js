const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },  // e.g., '204'
  capacity: { type: Number, required: true },
  location: { type: String, required: true },  // e.g., 'Floor 2'
  availability: { type: Boolean, default: true },  // Is the classroom available?
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
