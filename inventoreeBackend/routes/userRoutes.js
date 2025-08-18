const userRoutes = require("express").Router();
const UserController = require("../controllers/usersController");

userRoutes.get(`/`, UserController.getUsers);
userRoutes.get(`/:id`, UserController.getUserById);
userRoutes.post(`/`, UserController.addUser);
userRoutes.put(`/`, UserController.editUser);
userRoutes.delete(`/`, UserController.deleteUser);

module.exports = userRoutes;
