const { Role } = require("../models");

class RoleController {
  static async getRoles(req, res) {
    try {
      let roles = await Role.findAll();
      res.status(200).json(roles);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getRoleById(req, res) {
    try {
      const id = +req.params.id;
      let role = await Role.findOne({ where: { id } });
      if (!role) return res.status(404).json({ message: "Role not found" });
      res.status(200).json(role);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addRole(req, res) {
    try {
      const { name } = req.body;
      let role = await Role.create({ name });
      res.status(201).json(role);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editRole(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let role = await Role.update({ name }, { where: { id } });
      res.status(200).json(role);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteRole(req, res) {
    try {
      const id = +req.params.id;
      let result = await Role.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = RoleController;
