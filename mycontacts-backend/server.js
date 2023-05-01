const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dorenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
