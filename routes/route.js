const express = require("express");
const { addition, substraction, multiply } = require("../controller/controller");

const router = express.Router();

router.post("/addition", addition);
router.post("/substraction",substraction)
router.post("/multiply",multiply)

module.exports = { router };
