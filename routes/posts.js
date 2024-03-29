const express = require("express");
const router = express.Router();
const posts = require('../data/posts');

router.route("/")
    .get((req, res) => {
        res.json(posts);
    })
    .post((req, res) => {
        
        if (req.body.userId && req.body.title && req.body.content) {
            const post = {
                id: posts[posts.length - 1].id + 1,
                userId: req.body.userId,
                title: req.body.title,
                content: req.body.content,
            };

            posts.push(post);
            res.json(posts[posts.length - 1]);
        } else res.json({ error: "No Data Found" });
    });

  
module.exports = router;


