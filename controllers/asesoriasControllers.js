const { validationResult } = require("express-validator");
const { Asesorias } = require("../models/Asesorias");

const cargarAsesoria = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      const asesoriaCargada = new Asesorias(req.body);
      await asesoriaCargada.save(),
        res
          .status(201)
          .json({ asesoria: asesoriaCargada, msg: "Asesoria Contratada" });
    } else {
      res.status(400).json(err);
    }
  } catch (error) {
    res.json(error.message);
  }
};
const obtenerAsesoriaPorId = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      const asesoria = await Asesorias.findById(req.params.id);
      res.status(200).json(asesoria);
    } else {
      res.status(404).json({ msg: err });
    }
  } catch (error) {
    res.json(error.message);
  }
};
const editarAsesoria = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      await Asesorias.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ msg: "Datos actualizados" });
    } else {
      res.status(501).json(err);
    }
  } catch (error) {
    res.json(error.message);
  }
};

const eliminarAsesoria = async (req, res) => {
  try {
    const asesoria = await Asesorias.findByIdAndDelete(req.params.id);
    res.json({ msg: "Asesoria eliminada" });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  cargarAsesoria,
  obtenerAsesoriaPorId,
  editarAsesoria,
  eliminarAsesoria,
};
