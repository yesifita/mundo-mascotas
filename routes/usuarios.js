const express = require("express");
const {
  crearUsuario,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarioControllers");
const router = express.Router();

/* GET users listing. */

router.get("/lista", obtenerUsuario);

// POST genera usuario//
router.post("/registro", crearUsuario);
//PUT modifica el usuario//
router.put("/actualizar/:id", editarUsuario);

//DELETE elimina usuario//
router.delete('/eliminar/:id',eliminarUsuario)
module.exports = router;
