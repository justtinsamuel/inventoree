const roleRoutes = require("express").Router();
const RoleController = require("../controllers/rolesController");

roleRoutes.get(`/`, RoleController.getRoles);
roleRoutes.get(`/:id`, RoleController.getRoleById);
roleRoutes.post(`/`, RoleController.addRole);
roleRoutes.put(`/`, RoleController.editRole);
roleRoutes.delete(`/`, RoleController.deleteRole);

module.exports = roleRoutes;