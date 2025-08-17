require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models")
const base = "api";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route check
app.get(`/${base}`, (req, res) => {
  res.json({
    message: `Backend is running`,
  });
});

// DB connection check
db.sequelize
  .authenticate()
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.error(`DB couldn't connect`, err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
