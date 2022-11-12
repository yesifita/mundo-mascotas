const { Producto } = require("../models/Producto");

const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json({ productos });
};

const cargarProducto = async (req, res) => {
  try {
    const productoCargado = new Producto(req.body);
    await productoCargado.save(),
      res
        .status(201)
        .json({
          msg: "El producto fue Cargadao Exitosamente",
          producto: productoCargado,
        });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { obtenerProductos, cargarProducto };
