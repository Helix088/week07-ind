const express = require("express");
const router = express.Router();

router.use("/", require("./swagger"));
router.use("/poke-data", require("./poke-data"));
router.use("/trainers", require("./trainers"));

module.exports = router;
