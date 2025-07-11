// models/item.js
// This is the Post model
const mongoose = require('mongoose');

// Define the schema for a post
const postSchema = new mongoose.Schema({
  name: String, // The name of the post
  description: String // The description of the post
});

// Export the model
module.exports = mongoose.model('Post', postSchema);
