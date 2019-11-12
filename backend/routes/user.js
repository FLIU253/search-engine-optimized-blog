const express = require("express");
const router = express.Router();
const { requiresSignin, authMiddleware } = require("../controllers/auth");
const { read, publicProfile } = require("../controllers/user");

router.get("/profile", requiresSignin, authMiddleware, read);
router.get("/user/:username", publicProfile);

module.exports = router;
