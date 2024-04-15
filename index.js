const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Import from users and posts:
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

//Tell the Express application to use the router module stored in the variable userRoutes (defined above)
//for any HTTP request that starts with /api/users
app.use("/api/users", userRoutes);
//Same but for posts...
app.use("/api/posts", postRoutes);
//Because we're using app.use as opposed to app.get for example, it will apply to all incoming requests
//you don't need to physically have an api folder in your project structure.
// The /api/users and /api/posts paths in your index.js file when setting up routes with Express
// are virtual paths defined for organizing and accessing your routes in a RESTful manner via HTTP requests.
// They do not correspond to actual directories in your file system.

const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
