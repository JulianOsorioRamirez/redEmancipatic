/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/

/**
 * Utilizamos router de express para el enturiamiento y conexion de el backend con el front, ademas
 * de los diferentes controladores que utilizamos para dichas funciones y conexiones.
 * enrutamos las diferentes funciones con los endpoints requeridos para su conexion y utilizacion
 */

const router = require("express").Router();
const user = require("../controllers/user.controllers")
const categ = require("../controllers/categorias.controllers")
const voluntarios = require("../controllers/voluntarios.controllers")
const solicitudes = require("../controllers/solicitudes.controller")

router.post("/registro",user.registrer);
router.post("/login",user.login);
router.get("/categories", categ.getCategories);
router.post("/categories2", categ.postCategories2)
router.post("/voluntariosdisponibles",voluntarios.buscar)
router.post("/voluntario",voluntarios.buscar1)
router.get("/solicitudes", solicitudes.getSolicitudes)
 router.post("/solicitudes", solicitudes.postSolicitudes)
 router.post("/opinion", voluntarios.buscar2)
// router.post("/logOut",user.logOut);


module.exports = router;
