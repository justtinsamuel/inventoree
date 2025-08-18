const TransactionRoutes = require("express").Router();
const TransactionController = require("../controllers/transactionsController");

TransactionRoutes.get(`/`, TransactionController.getTransactions);
TransactionRoutes.get(`/:id`, TransactionController.getTransactionById);
TransactionRoutes.post(`/`, TransactionController.addTransaction);
TransactionRoutes.put(`/`, TransactionController.updateTransaction);
TransactionRoutes.delete(`/`, TransactionController.deleteTransaction);


module.exports = TransactionRoutes;