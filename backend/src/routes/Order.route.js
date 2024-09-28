const express = require("express");
const Authentication = require("../middlewares/Authentication");
const Authorization = require("../middlewares/Authorization"); // Authorization middleware
const Validation = require("../middlewares/Validation");
const { CreateOrder } = require("../validations/Order.validation");
const OrdersController = require("../controllers/Order.controller");

const router = express.Router();

// Apply Authentication middleware to all routes
router.use(Authentication);

// Route for creating an order, only for authorized roles (e.g., consumers and admins)
router
  .route("/create-order")
  .post(
    Authorization(["consumer", "admin"]), // Only consumers and admins can create orders
    CreateOrder,
    Validation,
    OrdersController.createOrder
  );

// Route for getting all orders, only for authorized roles (e.g., admins and managers)
router
  .route("/get-orders")
  .get(
    Authorization(["admin", "manager"]), // Only admins and managers can view all orders
    OrdersController.getAllorders
  );

// Route for getting an invoice by ID, accessible by authorized roles (e.g., consumers and admins)
router
  .route("/get-invoice/:id")
  .get(
    Authorization(["consumer", "admin"]), // Only consumers and admins can view an invoice
    OrdersController.getInvoiceById
  );

// Route for deleting an order, only accessible to admin
router
  .route("/delete/:id")
  .delete(
    Authorization(["admin"]), // Only admin can delete an order
    OrdersController.deleteOrder
  );

module.exports = router;
