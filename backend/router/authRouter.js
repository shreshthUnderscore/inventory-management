const express = require("express");
const router = express.Router();
const controller = require("../controller/authController");
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/cactegory",
    failureRedirect: "/sign-up",
  })
);

router.post("/sign-up", controller.signup);

module.exports = router;
