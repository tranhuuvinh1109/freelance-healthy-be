const express = require("express");
const router = express.Router();
const heartRateReadingController = require("../app/controllers/heartRateReading.controller");

// Create a new heart rate reading
router.post("/", heartRateReadingController.createHeartRateReading);

// Get all heart rate readings
router.get("/", heartRateReadingController.getAllHeartRateReadings);

// Get a heart rate reading by ID
router.get("/:id", heartRateReadingController.getHeartRateReadingById);

// Update a heart rate reading by ID
router.put("/:id", heartRateReadingController.updateHeartRateReading);

// Delete a heart rate reading by ID
router.delete("/:id", heartRateReadingController.deleteHeartRateReading);

module.exports = router;
