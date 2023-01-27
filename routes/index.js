const express = require("express");
const router = express.Router();

router.use("/", require("./swagger.js"));
router.use("/poke-data", require("./poke-data.js"));
router.use("/trainer-data", require("./trainer-data.js"));

module.exports = router;
