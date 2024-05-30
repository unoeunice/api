// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log("JSON Server is running on port", port);
// });

// Add Express
import express from "express";

const app = express();

// enable JSON body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
