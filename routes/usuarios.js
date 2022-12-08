const express = require("express");
const {
  crearUsuario,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarioControllers");
const router = express.Router();
const { check } = require("express-validator");

/* GET users listing. */

router.get("/lista", obtenerUsuario);

// POST genera usuario//
router.post(
  "/registro",
  [
    check("nombre")
      .not()
      .isEmpty()
      .isString()
      .withMessage("Debe  ingrersar un nombre"),
    check("apellido")
      .not()
      .isEmpty()
      .isString()
      .withMessage("Ingrese su apellido"),
    check("correo")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("dene ingresr un correo valido"),
    check("pass")
      .not()
      .isEmpty()
      .isStrongPassword()
      .isAlphanumeric()
      .isLength({ min: 6 })
      .withMessage(
        "La password debe tener al menos 6 digitos ,combinar numeros y letras"
      ),
  ],
  crearUsuario
);
//PUT modifica el usuario//
router.put("/actualizar/:id", editarUsuario);

//DELETE elimina usuario//
router.delete("/eliminar/:id", eliminarUsuario);
module.exports = router;
