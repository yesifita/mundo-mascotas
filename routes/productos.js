const express = require("express");
const router = express.Router();

const {
  obtenerProductos,
  cargarProducto,
  obtenerProductoPorId,
  editarProducto,
  eliminarProducto,
} = require("../controllers/productosControllers");


/*middlewares requeridos*/
const { check} = require("express-validator");
const{validarId}=require('../middlewares/validarId')

/* GET users listing. */
router.get("/lista", obtenerProductos);
router.get("/id/:id([0-9a-fA-F]{24})",validarId,obtenerProductoPorId);

/*POST crear datos */
router.post(
  "/crear",
  [
    check("codigo")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("Debe colocarse un Codigo"),
    check("marca")
      .not()
      .isEmpty()
      .withMessage("Debe colocar Marca del Producto"),
    check("descripcion")
    .not()
    .isEmpty()
    .withMessage("Debe ingresar una descripcion"),
    check("precio")
      .not()
      .isEmpty()
      .isNumeric()
      .isLength({ min: 1, max: 5 })
      .withMessage("no se puede ingresar mas de 5 digitos"),
  ],
  cargarProducto
);

/*PUT editar producto*/
router.put(
    "/editar/:id([0-9a-fA-F]{24})",
    validarId,
    [
      check("codigo")
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage("Debe colocarse un Codigo"),
      check("marca")
        .not()
        .isEmpty()
        .withMessage("Debe colocar Marca del Producto"),
      check("descripcion")
      .not()
      .isEmpty()
      .withMessage("Debe ingresar una descripcion"),
      check("precio")
        .not()
        .isEmpty()
        .isNumeric()
        .isLength({ min: 1, max: 5 })
        .withMessage("no se puede ingresar mas de 5 digitos"),
    ],
    editarProducto
  );

  /*DELETE elimina productos */
  router.delete('/eliminar/:id([0-9a-fA-F]{24})',validarId,eliminarProducto )
module.exports = router;
