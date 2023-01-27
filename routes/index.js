const express = require("express");
const router = express.Router();

router.use("/", require("./swagger"));
router.use("/poke-data", require("./poke-data"));
// router.use("/trainer-data", require("./trainer-data"));

module.exports = router;
