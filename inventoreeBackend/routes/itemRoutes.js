const itemRoutes = require("express").Router();
const ItemController = require("../controllers/itemsController");

itemRoutes.get(`/`, ItemController.getItems);
itemRoutes.get(`/:id`, ItemController.getItemById);
itemRoutes.post(`/`, ItemController.addItem);
itemRoutes.put(`/`, ItemController.updateItem);
itemRoutes.delete(`/`, ItemController.deleteItem);


module.exports = itemRoutes;