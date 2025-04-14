const express = require("express");
const { addition, substraction, multiply, alloperations } = require("../controller/controller");

const router = express.Router();

router.post("/addition", addition);
router.post("/substraction",substraction)
router.post("/multiply",multiply)
router.post("/calulate",alloperations)
module.exports = { router };
