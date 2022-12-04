const express = require("express");
const router = express.Router();
const { cargarAsesoria, obtenerAsesoriaPorId, editarAsesoria, eliminarAsesoria } = require("../controllers/asesoriasControllers");
//middleware//
const { check } = require("express-validator");
const { eliminarProducto } = require("../controllers/productosControllers");

//POST carga asesoria//
router.post(
  "/cargar",
  [
    check("especieAnimal")
      .not()
      .isEmpty()
      .isString()
      .withMessage("debe colocar especie animal"),
    check("pesoDeAnimal")
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage("Debe colocar edad de mascota"),
      check('edad').not().isEmpty().isNumeric().withMessage('Debe aclarar la edad de su mascota')],      
  cargarAsesoria
);

//GET obtiene asesoria//
router.get('/obtener/:id',obtenerAsesoriaPorId);

//PUT edita asesorias//
router.put('/modificar/:id([0-9a-fA-F]{24})',[
    check("especieAnimal")
      .not()
      .isEmpty()
      .isString()
      .withMessage("debe colocar especie animal"),
    check("pesoDeAnimal")
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage("Debe colocar edad de mascota"),
      check('edad').not().isEmpty().isNumeric().withMessage('Debe aclarar la edad de su mascota')],editarAsesoria
      );

      //DELETE elimina asesoria//
      router.delete('/borrar/:id([0-9a-fA-F]{24})',eliminarAsesoria)

module.exports = router;