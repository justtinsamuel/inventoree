const router = require("express").Router();
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

router.get("/", (req, res) => {
  res.json({ message: "WEB API" });
});

router.get("/admin-data", authenticate, authorize("admin"), (req, res) => {
  res.json({ message: "Only admin can see this" });
});

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const roleRoutes = require("./roleRoutes");
const brandRoutes = require("./brandRoutes");
const typeRoutes = require("./typeRoutes");
const itemRoutes = require("./itemRoutes");
const transactionRoutes = require("./transactionRoutes");
const TransactionItemRoutes = require("./transactionItemRoutes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/brands", brandRoutes);
router.use("/types", typeRoutes);
router.use("/items", itemRoutes);
router.use("/transactions", transactionRoutes);
router.use("/transaction-item", TransactionItemRoutes);

module.exports = router;
