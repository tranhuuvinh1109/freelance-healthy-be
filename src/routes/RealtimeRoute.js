const express = require("express");
const RealtimeController = require("../app/controllers/RealtimeController");
const router = express.Router();

router.get("/write", RealtimeController.write);
// router.get("/:id", AppointmentController.getAppointmentByID);

module.exports = router;
