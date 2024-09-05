const HeartRateReading = require("../models/heartRateReading.model");

// Create a new heart rate reading
exports.createHeartRateReading = async (req, res) => {
  try {
    const heartRateReading = new HeartRateReading(req.body);
    const savedHeartRateReading = await heartRateReading.save();
    res.status(201).json(savedHeartRateReading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all heart rate readings
exports.getAllHeartRateReadings = async (req, res) => {
  try {
    const heartRateReadings = await HeartRateReading.find()
      .populate("user_id")
      .populate("device_id");
    res.status(200).json(heartRateReadings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a heart rate reading by ID
exports.getHeartRateReadingById = async (req, res) => {
  try {
    const heartRateReading = await HeartRateReading.findById(req.params.id)
      .populate("user_id")
      .populate("device_id");
    if (!heartRateReading) {
      return res.status(404).json({ message: "Heart Rate Reading not found" });
    }
    res.status(200).json(heartRateReading);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a heart rate reading
exports.updateHeartRateReading = async (req, res) => {
  try {
    const updatedHeartRateReading = await HeartRateReading.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedHeartRateReading) {
      return res.status(404).json({ message: "Heart Rate Reading not found" });
    }
    res.status(200).json(updatedHeartRateReading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a heart rate reading
exports.deleteHeartRateReading = async (req, res) => {
  try {
    const deletedHeartRateReading = await HeartRateReading.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHeartRateReading) {
      return res.status(404).json({ message: "Heart Rate Reading not found" });
    }
    res
      .status(200)
      .json({ message: "Heart Rate Reading deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
