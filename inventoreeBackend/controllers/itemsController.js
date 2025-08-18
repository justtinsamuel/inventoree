const express = require("express");
const { Item, Brand, Type } = require("../models");

class ItemController {
  // GET all items
  static async getItems(req, res) {
    try {
      const items = await Item.findAll({
        include: [Brand, Type],
      });
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // GET one item by ID
  static async getItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id, { include: [Brand, Type] });
      if (!item) return res.status(404).json({ message: "Item not found" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // CREATE new item
  static async addItem(req, res) {
    try {
      const { name, stock, price, brandId, typeId } = req.body;
      const item = await Item.create({ name, stock, price, brandId, typeId });
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // UPDATE item
  static async updateItem(req, res) {
    try {
      const { id } = req.params;
      const { name, stock, price, brandId, typeId } = req.body;

      const [updated] = await Item.update(
        { name, stock, price, brandId, typeId },
        { where: { id } }
      );

      if (!updated) return res.status(404).json({ message: "Item not found" });
      res.json({ message: "Item updated" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // DELETE item
  static async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Item.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ message: "Item not found" });
      res.json({ message: "Item deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ItemController;
