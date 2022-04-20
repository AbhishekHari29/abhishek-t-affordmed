const express = require("express");
const { getNumber } = require("../controllers/number");

const router = new express.Router();

router.get("/numbers", getNumber);

module.exports = router;
