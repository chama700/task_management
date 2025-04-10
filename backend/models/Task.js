const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  status: { type: String, default: 'Pending' },
  assignee: { type: String },
  priority: { type: String, default: 'P0' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
