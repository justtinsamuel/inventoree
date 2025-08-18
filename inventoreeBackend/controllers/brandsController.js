const { Brand } = require("../models");

class BrandController {
  static async getBrand(req, res) {
    try {
      let brands = await Brand.findAll();
      res.status(200).json(brands);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getBrandById(req, res) {
    try {
      const id = +req.params.id;
      let brand = await Brand.findOne({ where: { id } });
      res.status(200).json(brand);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addBrand(req, res) {
    try {
      const { name } = req.body;
      let brand = await Brand.create({ name });
      res.status(201).json(brand);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editBrand(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let brand = await Brand.update({ name }, { where: { id } });
      res.status(200).json(brand);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteBrand(req, res) {
    try {
      const id = +req.params.id;
      let result = await Brand.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BrandController;