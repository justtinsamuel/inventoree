const typeRoutes = require("express").Router();
const TypeController = require("../controllers/typesController");

typeRoutes.get(`/`, TypeController.getTypes);
typeRoutes.get(`/:id`, TypeController.getTypeById);
typeRoutes.post(`/`, TypeController.addType);
typeRoutes.put(`/`, TypeController.editType);
typeRoutes.delete(`/`, TypeController.deleteType);

module.exports = typeRoutes;