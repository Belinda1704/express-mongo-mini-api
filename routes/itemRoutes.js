// routes/itemRoutes.js
// This file contains all the routes for posts
const express = require('express');
const router = express.Router();
const postController = require('../controllers/itemController');

// Get all posts
router.get('/', postController.getPosts);
// Get a single post
router.get('/:id', postController.getPost);
// Create a new post
router.post('/', postController.createPost);
// Update a post
router.put('/:id', postController.updatePost);
// Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;
