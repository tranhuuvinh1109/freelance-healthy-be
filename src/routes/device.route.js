const express = require("express");
const router = express.Router();
const deviceController = require("../app/controllers/device.controller");

// Create a new device
router.post("/", deviceController.createDevice);

// Get all devices
router.get("/", deviceController.getAllDevices);

// Get a device by ID
router.get("/:id", deviceController.getDeviceById);

// Update a device by ID
router.put("/:id", deviceController.updateDevice);

// Delete a device by ID
router.delete("/:id", deviceController.deleteDevice);

module.exports = router;
