const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const pokemonList = [
  { id: 1, name: "bulbasaur" },
  { id: 2, name: "charmander" },
  { id: 3, name: "squirtle" },
];

router.get("/pokemons", (req, res) => {
  res.json(pokemonList);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
