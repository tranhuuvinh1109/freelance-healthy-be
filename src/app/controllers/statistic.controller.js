const Statistic = require("../models/statistic.model");

// Create a new statistic
exports.createStatistic = async (req, res) => {
  try {
    const statistic = new Statistic(req.body);
    const savedStatistic = await statistic.save();
    res.status(201).json(savedStatistic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all statistics
exports.getAllStatistics = async (req, res) => {
  try {
    const statistics = await Statistic.find().populate("user_id");
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a statistic by ID
exports.getStatisticById = async (req, res) => {
  try {
    const statistic = await Statistic.findById(req.params.id).populate(
      "user_id"
    );
    if (!statistic) {
      return res.status(404).json({ message: "Statistic not found" });
    }
    res.status(200).json(statistic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a statistic by ID
exports.updateStatistic = async (req, res) => {
  try {
    const updatedStatistic = await Statistic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStatistic) {
      return res.status(404).json({ message: "Statistic not found" });
    }
    res.status(200).json(updatedStatistic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a statistic by ID
exports.deleteStatistic = async (req, res) => {
  try {
    const deletedStatistic = await Statistic.findByIdAndDelete(req.params.id);
    if (!deletedStatistic) {
      return res.status(404).json({ message: "Statistic not found" });
    }
    res.status(200).json({ message: "Statistic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
