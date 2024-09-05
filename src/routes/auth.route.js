const express = require("express");

const { signup, login, logout } = require("../app/controllers/auth.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from auth route");
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/currentUser", (req, res) => {
  res.json(req.user);
});

// router.get("/authCheck", protectRoute, authCheck);

module.exports = router;
