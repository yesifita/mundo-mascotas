const { Usuario } = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const crearUsuario = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.contraseña, salt);

      const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contraseña: hash,
      };
      const nuevoUsuario = new Usuario(usuario);
      await nuevoUsuario.save();
      res.status(201).json({ nuevoUsuario });
    } else {
      res.status(500).json(err);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const obtenerUsuario = async (req, res) => {
  const listaUsuarios = await Usuario.find();
  res.status(201).json({ listaUsuarios });
};
const editarUsuario = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      await Usuario.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ msg: "Usuario modificado" });
    } else {
      res.status(501).json(err);
    }
  } catch (error) {
    res.json(error.message);
  }
};
const eliminarUsuario = async (req, res) => {
  try {
    const asesoria = await Usuario.findByIdAndDelete(req.params.id);
    res.json({ msg: "Usuario eliminado" });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  crearUsuario,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
};
