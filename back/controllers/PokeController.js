class PokeController {
  constructor(pokeService) {
    this.pokeService = pokeService;
  }

  //my methods will consume the microservices

  getAllPokemons = async (req, res) => {
    try {
      const allPokemons = await this.pokeService.getAllPokemons();
      return res.json(allPokemons);
    } catch (e) {
      console.warn(e);
    }
  };
}

module.exports = PokeController;
