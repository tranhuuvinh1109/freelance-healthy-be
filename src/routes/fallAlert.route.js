const express = require("express");
const router = express.Router();
const fallAlertController = require("../app/controllers/fallAlert.controller");

// Create a new fall alert
router.post("/", fallAlertController.createFallAlert);

// Get all fall alerts
router.get("/", fallAlertController.getAllFallAlerts);

// Get a fall alert by ID
router.get("/:id", fallAlertController.getFallAlertById);

// Update a fall alert by ID
router.put("/:id", fallAlertController.updateFallAlert);

// Delete a fall alert by ID
router.delete("/:id", fallAlertController.deleteFallAlert);

module.exports = router;
