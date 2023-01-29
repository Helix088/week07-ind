const express = require("express");
const routes = express.Router();
const oauth = require("../middleware/authorize.js");

const trainerDataControl = require("../controllers/trainers");
const validation = require("../middleware/validate");

routes.get("/", trainerDataControl.getTrainerData);

routes.get("/:id", trainerDataControl.getTrainer);

routes.post("/", oauth.checkLoggedin, validation.saveTrainer, trainerDataControl.createTrainer);

routes.put("/:id", oauth.checkLoggedin, validation.saveTrainer, trainerDataControl.updateTrainer);

routes.delete("/:id", oauth.checkLoggedin, trainerDataControl.deleteTrainer);

module.exports = routes;
