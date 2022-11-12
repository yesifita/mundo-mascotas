const obtenerRecurso = (req, res, next) => {
  res.send("respond with a resource");
};

const obtenerUsuarios = (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "yesica",
    },
    {
      id: 2,
      nombre: "marcos",
    }
  ]);
};
module.exports = { obtenerRecurso, obtenerUsuarios };
