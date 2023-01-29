const express = require("express");
const routes = express.Router();
const security = require("../middleware/authorize.js");

const trainerDataControl = require("../controllers/trainers");
const validation = require("../middleware/validate");

routes.get("/", trainerDataControl.getTrainerData);

routes.get("/:id", trainerDataControl.getTrainer);

routes.post("/", security.checkLoggedin, validation.saveTrainer, trainerDataControl.createTrainer);

routes.put("/:id", security.checkLoggedin, validation.saveTrainer, trainerDataControl.updateTrainer);

routes.delete("/:id", security.checkLoggedin, trainerDataControl.deleteTrainer);

module.exports = routes;
