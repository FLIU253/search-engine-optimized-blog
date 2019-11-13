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
  listRelated,
  listSearch
} = require("../controllers/blog");
const {
  requiresSignin,
  adminMiddleware,
  authMiddleware
} = require("../controllers/auth");

router.post("/blog", requiresSignin, adminMiddleware, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requiresSignin, adminMiddleware, remove);
router.put("/blog/:slug", requiresSignin, adminMiddleware, update);
router.get("/blog/photo/:slug", photo);
router.post("/blogs/related", listRelated);
router.get("/blogs/search", listSearch);

// auth user blog crud
router.post("/user/blog", requiresSignin, authMiddleware, create);
router.delete("/user/blog/:slug", requiresSignin, authMiddleware, remove);
router.put("/user/blog/:slug", requiresSignin, authMiddleware, update);
module.exports = router;
