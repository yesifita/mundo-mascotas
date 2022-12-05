const axios = require("axios");

const consultaAxiosQuote = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://www.breakingbadapi.com/api/quote/random"
    );
    res.json({ data });
  } catch (error) {
    res.json({data:error.response.data, status:error.response.status});
  }
};

const consultaPokeApiPorNombre = async (req, res) => {
  try {
    const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/"+req.params.name);
    res.json({ data: resultado.data, status: resultado.status });
  } catch (error) {
    res.json({data:error.response.data, status:error.response.status})

  }
};
module.exports = { consultaAxiosQuote, consultaPokeApiPorNombre };
