const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const Task = require('./models/Task');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MongoDB URI is undefined. Check your environment variables.");
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const taskRoutes = require("./routes/tasks");
const authRoutes = require('./routes/auth');
app.use("/api/tasks", taskRoutes);
app.use('/api/auth', authRoutes);

app.post('/api/tasks', async (req, res) => {
  const { title, description, startDate, endDate, status, assignee, priority } = req.body;

  const newTask = new Task({
    title,
    description,
    startDate,
    endDate,
    status,
    assignee,
    priority
  });

  try {
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
