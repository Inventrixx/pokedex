module.exports = app => {
  const PokeService = require("./services/PokeService");
  const PokeServiceInstance = new PokeService();

  const PokeController = require("./controllers/PokeController");
  const PokeControllerInstance = new PokeController(PokeServiceInstance);

  app.get("/api/", PokeControllerInstance.getAllPokemons);
  app.get("/api/:pokemon", PokeControllerInstance.getUniquePokemon);
};
