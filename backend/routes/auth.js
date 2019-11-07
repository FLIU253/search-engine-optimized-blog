const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requiresSignin
} = require("../controllers/auth");

//validators
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", userSigninValidator, runValidation, signout);

//test
// router.get("/secret", requiresSignin, (req, res) => {
//   res.json({
//     message: "you have access to secret page"
//   });
// });

module.exports = router;
