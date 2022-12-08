const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {crearSesion, consultarSesion, cerrarSesion}= require('../controllers/indexController');
const validarUsuario=require('../middlewares/validarUsuario');
//const {check}=require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET sesion. */
router.get('/sesion',crearSesion);
router.get('/consultar',validarUsuario,consultarSesion);
router.delete('/cerrar',cerrarSesion);

module.exports = router;
