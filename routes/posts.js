const express = require("express");
const router = express.Router(); //Needed to route
const posts = require("../data/posts"); //Needs access to our posts data file

// Get ALL posts:
router.get("/", (req, res) => {
  //app.get had to change to router.get
  res.json(posts);
});

// Creating a simple GET route for individual posts
// using a route parameter for the unique ID:
router.get("/:id", (req, res) => {
  //app.get had to change to router.get
  const post = posts.find((p) => p.id == req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

//Need to export this for use in main app
module.exports = router;
