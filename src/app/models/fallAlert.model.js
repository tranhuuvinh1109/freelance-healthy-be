const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FallAlert = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    device_id: { type: Schema.Types.ObjectId, ref: "Device" },
    alert_type: { type: String, required: true },
    hanled: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FallAlert", FallAlert);
