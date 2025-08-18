const { TransactionItem, Transaction, Item } = require("../models");

class TransactionItemController {
  static async getTransactionItems(req, res) {
    try {
      let data = await TransactionItem.findAll({
        include: [Transaction, Item],
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getTransactionItemById(req, res) {
    try {
      const id = +req.params.id;
      let result = await TransactionItem.findOne({
        where: { id },
        include: [Transaction, Item],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addTransactionItem(req, res) {
    try {
      const { TransactionId, ItemId, quantity, price } = req.body;
      let result = await TransactionItem.create({
        TransactionId,
        ItemId,
        quantity,
        price,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editTransactionItem(req, res) {
    try {
      const id = +req.params.id;
      const { TransactionId, ItemId, quantity, price } = req.body;
      let result = await TransactionItem.update(
        { TransactionId, ItemId, quantity, price },
        { where: { id } }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteTransactionItem(req, res) {
    try {
      const id = +req.params.id;
      let result = await TransactionItem.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TransactionItemController;