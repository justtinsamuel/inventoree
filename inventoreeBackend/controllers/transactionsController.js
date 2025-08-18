const { Transaction, User, TransactionItem, Item } = require("../models");

class TransactionController {
  static async getTransactions(req, res) {
    try {
      let transactions = await Transaction.findAll({
        include: [User, { model: TransactionItem, include: [Item] }],
      });
      res.status(200).json(transactions);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getTransactionById(req, res) {
    try {
      const id = +req.params.id;
      let transaction = await Transaction.findOne({
        where: { id },
        include: [User, { model: TransactionItem, include: [Item] }],
      });
      res.status(200).json(transaction);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addTransaction(req, res) {
    try {
      const { date, total } = req.body;
      let UserId = +req.userData.id;

      let transaction = await Transaction.create({ date, total, UserId });
      res.status(201).json(transaction);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateTransaction(req, res) {
    try {
      const id = +req.params.id;
      const { date, total, UserId } = req.body;
      let transaction = await Transaction.update(
        { date, total, UserId },
        { where: { id } }
      );
      res.status(200).json(transaction);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteTransaction(req, res) {
    try {
      const id = +req.params.id;
      let result = await Transaction.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TransactionController;
