const express = require("express");
const router = express.Router(); //Needed to route
const users = require("../data/users"); //Needs access to our user data file

// Get ALL users:
router.get("/", (req, res) => {
  //app.get had to change to router.get
  res.json(users);
});

// Creating a simple GET route for individual users
// using a route parameter for the unique ID:
router.get("/:id", (req, res) => {
  //app.get had to change to router.get
  const user = users.find((u) => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

//Need to export this for use in main app
module.exports = router;
