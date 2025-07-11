// index.js
// This is the main file for the Express app
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 3000; // The port the server will run on

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/miniapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));

// Use the post routes
app.use('/api/posts', postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
