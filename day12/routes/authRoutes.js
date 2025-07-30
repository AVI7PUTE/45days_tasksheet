const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);

// Example protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access to this protected route", user: req.user });
});

module.exports = router;
