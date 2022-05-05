const express = require('express')

const { getOnePokemon, getAllPokemons, getInfoOnePokemon } = require('../controllers/pokemons')

const api = express.Router();

api.route("/").get(getAllPokemons)

api.route("/:id").get(getOnePokemon)

api.route("/:id/:info").get(getInfoOnePokemon)

module.exports = api;

