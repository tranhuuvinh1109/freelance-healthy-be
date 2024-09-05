const Device = require("../models/device.model.js");

// Create a new device
async function createDevice(req, res) {
  try {
    const device = new Device(req.body);
    const savedDevice = await device.save();
    res.status(201).json(savedDevice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Get all devices
async function getAllDevices(req, res) {
  try {
    const devices = await Device.find().populate("user_id");
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get a device by ID
async function getDeviceById(req, res) {
  try {
    const device = await Device.findById(req.params.id).populate("user_id");
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a device
async function updateDevice(req, res) {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDevice) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete a device
async function deleteDevice(req, res) {
  try {
    const deletedDevice = await Device.findByIdAndDelete(req.params.id);
    if (!deletedDevice) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.status(200).json({ message: "Device deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
  updateDevice,
  deleteDevice,
};
