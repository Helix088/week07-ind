const express = require("express");
const routes = express.Router();
const security = require("../middleware/authorize.js");
const pokeDataControl = require("../controllers/poke-data");
const validation = require("../middleware/validate.js");

routes.get("/", pokeDataControl.getPokeData);

routes.get("/:id", pokeDataControl.getPokemon);

routes.post("/", security.checkLoggedin, validation.savePokemon, pokeDataControl.createPokemon);

routes.put("/:id", security.checkLoggedin, validation.savePokemon, pokeDataControl.updatePokemon);

routes.delete("/:id", security.checkLoggedin, pokeDataControl.deletePokemon);

module.exports = routes;
