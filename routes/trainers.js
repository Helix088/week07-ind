const express = require("express");
const routes = express.Router();
const authO = require("../middleware/authorize.js");

const trainerDataControl = require("../controllers/trainers");
const validation = require("../middleware/validate");

routes.get("/", trainerDataControl.getTrainerData);

routes.get("/:id", trainerDataControl.getTrainer);

routes.post("/", authO.checkLoggedin, validation.saveTrainer, trainerDataControl.createTrainer);

routes.put("/:id", authO.checkLoggedin, validation.saveTrainer, trainerDataControl.updateTrainer);

routes.delete("/:id", authO.checkLoggedin, trainerDataControl.deleteTrainer);

module.exports = routes;
