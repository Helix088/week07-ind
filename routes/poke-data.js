// const express = require("express");
// const routes = express.Router();
// const authO = require('../middleware/authorize.js')

// const pokeDataControl = require("../controllers/poke-data");
// const validation = require('../middleware/validate');

// routes.get("/", pokeDataControl.getPokeData);

// routes.get("/:id", pokeDataControl.getPokemon);

// routes.post("/", authO.checkLoggedin, validation.savePokemon, pokeDataControl.createPokemon);

// routes.put("/:id", authO.checkLoggedin, validation.savePokemon, pokeDataControl.updatePokemon);

// routes.delete("/:id", authO.checkLoggedin, pokeDataControl.deletePokemon);

// module.exports = routes;

const express = require("express");
const routes = express.Router();
const authO = require("../middleware/authorize");

const pokeDataControl = require("../controllers/poke-data");
const validation = require("../middleware/validate");

routes.get("/", pokeDataControl.getPokeData);

routes.get("/:id", pokeDataControl.getPokemon);

routes.post(
  "/",
  authO.checkLoggedin,
  validation.savePokemon,
  pokeDataControl.createPokemon
);

routes.put(
  "/:id",
  authO.checkLoggedin,
  validation.savePokemon,
  pokeDataControl.updatePokemon
);

routes.delete("/:id", authO.checkLoggedin, pokeDataControl.deletePokemon);

module.exports = routes;