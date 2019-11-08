const express = require("express");
const router = express.Router();
const { create } = require("../controllers/blog");
const { requiresSignin, adminMiddleware } = require("../controllers/auth");

router.post("/blog", requiresSignin, adminMiddleware, create);

module.exports = router;
