const router = require('.');
const{consultaAxiosQuote,consultaPokeApiPorNombre}=require('../controllers/axiosController');

//GET---//
//**LEER**obtiene citas aleatorias si se recarga el navegador o se hace mas de una peticion en postman con igual endpoint***//
router.get('/axios',consultaAxiosQuote);
//obtiene ficha de nombre de personaje solicitado//
router.get('/poke/:name',consultaPokeApiPorNombre);

module.exports=router
