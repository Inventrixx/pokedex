class PokeController {
  constructor(pokeService) {
    this.pokeService = pokeService;
  }

  //my methods will consume the microservices

  getAllPokemons = async (req, res) => {
    try {
      const allPokemons = await this.pokeService.getAllPokemons(
        req.query.offset,
        req.query.limit
      );
      res.json(allPokemons.results);
    } catch (e) {
      console.warn(e);
    }
  };

  getUniquePokemon = async (req, res) => {
    const { pokemon } = req.params;

    try {
      const uniquePokemon = await this.pokeService.getUniquePokemon(pokemon);
      const cleanUniquePokemon = {
        name: uniquePokemon.name,
        id: uniquePokemon.id,
        type: uniquePokemon.types.map(type => type.type.name),
        img: uniquePokemon.sprites.front_default,
        weight: uniquePokemon.weight
      };

      res.json(cleanUniquePokemon);
    } catch (e) {
      console.warn(e);
    }
  };
}

module.exports = PokeController;
