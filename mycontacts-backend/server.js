const express = require("express");
const dorenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//MiddleWare
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
