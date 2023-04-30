const express = require("express");
const dorenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
