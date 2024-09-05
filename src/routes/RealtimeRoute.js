const express = require("express");
const RealtimeController = require("../app/controllers/RealtimeController");
const router = express.Router();

router.post("/write", RealtimeController.write);
router.post("/read", RealtimeController.read);

module.exports = router;
