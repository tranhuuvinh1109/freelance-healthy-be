const express = require("express");
const RealtimeController = require("../app/controllers/RealtimeController");
const router = express.Router();

router.get("/write", RealtimeController.write);
router.get("/read", RealtimeController.read);

module.exports = router;
