const express = require("express");
const router = express.Router();
const statisticController = require("../app/controllers/statistic.controller");

// Create a new statistic
router.post("/", statisticController.createStatistic);

// Get all statistics
router.get("/", statisticController.getAllStatistics);

// Get a statistic by ID
router.get("/:id", statisticController.getStatisticById);

// Update a statistic by ID
router.put("/:id", statisticController.updateStatistic);

// Delete a statistic by ID
router.delete("/:id", statisticController.deleteStatistic);

module.exports = router;
