const { User, Role } = require("../models");

class UserController {
  static async getUsers(req, res) {
    try {
      let users = await User.findAll({
        include: [{ model: Role, through: { attributes: [] } }],
        attributes: ["id", "name", "email"],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      let user = await User.findOne({
        where: { id },
        include: [{ model: Role, through: { attributes: [] } }],
        attributes: ["id", "name", "email"],
      });
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addUser(req, res) {
    try {
      const { name, email, password } = req.body;
      let user = await User.create({ name, email, password });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editUser(req, res) {
    try {
      const id = +req.params.id;
      const { name, email } = req.body;
      let user = await User.update({ name, email }, { where: { id } });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
