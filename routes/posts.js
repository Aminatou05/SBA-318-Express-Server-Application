
express = require('express');
const router = express.Router();

const postsData = require('../data/posts');

// Create a new post
router.post('/api/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = posts.length + 1;
    posts.push(newPost);
    res.status(201).json(newPost);
  });

module.exports = router;
