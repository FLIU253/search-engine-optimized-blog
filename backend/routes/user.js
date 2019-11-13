const express = require("express");
const router = express.Router();
const { requiresSignin, authMiddleware } = require("../controllers/auth");
const { read, publicProfile, update, photo } = require("../controllers/user");

router.get("/user/profile", requiresSignin, authMiddleware, read);
router.get("/user/:username", publicProfile);
router.put("/user/update", requiresSignin, authMiddleware, update);
router.get("/user/photo/:username", photo);

module.exports = router;
