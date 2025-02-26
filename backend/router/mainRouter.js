const express = require("express");
const router = express.Router();
const controller = require("../controller/mainController");

router.get("/", controller.getMainPage);
router.get("/:name", controller.getMainPage);

module.exports = router;
