const express = require("express");
const { getPrefix } = require("../controllers/prefix");

const router = new express.Router();

router.get("/prefixes", getPrefix);

module.exports = router;
