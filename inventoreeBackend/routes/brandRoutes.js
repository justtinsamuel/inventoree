const brandRoutes = require("express").Router();
const brandController = require("../controllers/brandsController");

brandRoutes.get("/", brandController.getBrand);
brandRoutes.get("/", brandController.getBrandById);
brandRoutes.post("/", brandController.addBrand);
brandRoutes.put("/", brandController.addBrand);
brandRoutes.delete("/", brandController.addBrand);


module.exports = brandRoutes;
