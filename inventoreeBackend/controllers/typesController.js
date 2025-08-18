const { Type } = require("../models");

class TypeController {
  static async getTypes(req, res) {
    try {
      let types = await Type.findAll();
      res.status(200).json(types);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getTypeById(req, res) {
    try {
      const id = +req.params.id;
      let type = await Type.findOne({ where: { id } });
      res.status(200).json(type);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addType(req, res) {
    try {
      const { name } = req.body;
      let type = await Type.create({ name });
      res.status(201).json(type);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editType(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let type = await Type.update({ name }, { where: { id } });
      res.status(200).json(type);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteType(req, res) {
    try {
      const id = +req.params.id;
      let result = await Type.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TypeController;
