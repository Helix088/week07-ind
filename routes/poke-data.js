const express = require("express");
const routes = express.Router();
const oauth = require("../middleware/authorize.js");
const pokeDataControl = require("../controllers/poke-data");
const validation = require("../middleware/validate.js");

routes.get("/", pokeDataControl.getPokeData);

routes.get("/:id", pokeDataControl.getPokemon);

routes.post("/", oauth.checkLoggedin, validation.savePokemon, pokeDataControl.createPokemon);

routes.put("/:id", oauth.checkLoggedin, validation.savePokemon, pokeDataControl.updatePokemon);

routes.delete("/:id", oauth.checkLoggedin, pokeDataControl.deletePokemon);

module.exports = routes;
