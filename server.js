// app.js

const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express.js 3!");
});

// Route with parameters
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Post request
app.post("/submit", (req, res) => {
  const { data } = req.body;
  // Process the submitted data
  res.json({ message: `Received data: ${data}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
