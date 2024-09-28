const express = require("express");
const UserController = require("../controllers/User.controller"); // Import the UserController
const router = express.Router();

// Register a user (admin, worker, consumer, etc.)
router.post("/register", UserController.registerUser);

// Login user
router.post("/login", UserController.loginUser);

// Get user profile (for authenticated user)
router.get("/profile", UserController.getUserProfile);

module.exports = router;
