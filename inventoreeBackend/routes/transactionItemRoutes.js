const TransactionItemRoutes = require("express").Router();
const TransactionItemController = require("../controllers/transactionItemController");

TransactionItemRoutes.get(`/`, TransactionItemController.getTransactionItems);
TransactionItemRoutes.get(`/:id`, TransactionItemController.getTransactionItemById);
TransactionItemRoutes.post(`/`, TransactionItemController.addTransactionItem);
TransactionItemRoutes.put(`/`, TransactionItemController.editTransactionItem);
TransactionItemRoutes.delete(`/`, TransactionItemController.deleteTransactionItem);


module.exports = TransactionItemRoutes;