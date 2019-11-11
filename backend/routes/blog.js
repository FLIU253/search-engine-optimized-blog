const express = require("express");
const router = express.Router();
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated
} = require("../controllers/blog");
const { requiresSignin, adminMiddleware } = require("../controllers/auth");

router.post("/blog", requiresSignin, adminMiddleware, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requiresSignin, adminMiddleware, remove);
router.put("/blog/:slug", requiresSignin, adminMiddleware, update);
router.get("/blog/photo/:slug", photo);
router.post("/blogs/related", listRelated);

module.exports = router;
