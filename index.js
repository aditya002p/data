const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to serve static files (if needed)
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Load JSON data from file
const dbPath = path.join(__dirname, "db.json");
let jsonData = [];
try {
  jsonData = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
} catch (err) {
  console.error("Error loading JSON file:", err);
}

// Routes
app.get("/data", (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
