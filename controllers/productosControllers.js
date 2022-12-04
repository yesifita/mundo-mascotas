const { Producto } = require("../models/Producto");
const { check, validationResult } = require("express-validator");

const obtenerProductos = async (req, res) => {
  const productos = await Producto.find()
  if (productos ==0) {
    res.json("aun no cargaste productos");
  } else {
    res.json({ productos });
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty) {
      const producto = await Producto.findById(req.params.id);
      res.status(200).json({ producto });
    } else {
      res.status(501).json({ msg: error });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const cargarProducto = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      const productoCargado = new Producto(req.body);
      await productoCargado.save(),
        res.status(201).json({
          msg: "El producto fue Cargado Exitosamente",
          producto: productoCargado,
        });
    } else {
      res.status(501).json(err);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const editarProducto = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ msg: "Producto actualizado" });
    } else {
      res.status(501).json({ msg: err });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    res.json({ msg: "Producto Eliminado", producto });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  obtenerProductos,
  cargarProducto,
  obtenerProductoPorId,
  editarProducto,
  eliminarProducto,
};
