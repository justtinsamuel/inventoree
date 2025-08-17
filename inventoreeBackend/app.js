const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./models");
const routes = require("./routes/index");
const root = "api";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connection check
db.sequelize
  .authenticate()
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.error(`DB couldn't connect`, err));

// routes
app.use(`/${root}`, routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
