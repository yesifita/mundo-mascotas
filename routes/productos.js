const express = require('express');
const { obtenerProductos,cargarProducto } = require('../controllers/productosControllers');
const router = express.Router();

/* GET users listing. */
router.get('/lista',obtenerProductos);

/*POST crear datos */
router.post('/crear',cargarProducto);


module.exports = router;