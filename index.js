const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve your JSON files
app.use("/albums", express.static(path.join(__dirname, "data/albums.json")));
app.use(
  "/comments",
  express.static(path.join(__dirname, "data/comments.json"))
);
app.use("/photos", express.static(path.join(__dirname, "data/photos.json")));
app.use("/posts", express.static(path.join(__dirname, "data/posts.json")));
app.use("/todos", express.static(path.join(__dirname, "data/todos.json")));
app.use("/users", express.static(path.join(__dirname, "data/users.json")));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
