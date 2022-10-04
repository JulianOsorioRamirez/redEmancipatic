/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/

/**
 * requerimos los modelos que utilizaremos para las diferentes busquedas en la BD de voluntarios
 */
const Voluntarios = require('../models/voluntariosModels')
const Opiniones = require('../models/opinionesModels')

/**
 * Voluntarios
 * @contructor
 * @return {json}
 * Hacemos una busqueda en la BD y hacemos un filtro de los diferentes voluntarios segun las categorias a las 
 * que estan asociados y recogemos solo los 5 primeros para su posterior envio a el front y asi utilizarlo 
 * en las vistas
 */
const voluntarios = {
    buscar : async (req, res) => {
        var volun = []
       
   var nombre_categoria = req.body.categoria
   var voluntariosdisponible = await Voluntarios.find({serviciosDisponibles : nombre_categoria})
   
   for(let i =0;i<5;i++){
    volun.push(voluntariosdisponible[i])
   }
   
   res.json({voluntarios:volun})
    },
    buscar1 : async (req, res) => {
        var voluntario = await Voluntarios.findOne({nombreApellidos : req.body.nombre})
        res.json({voluntario})
        
    },
    buscar2 : async (req, res) => {
        var opinion = await Opiniones.find({nombreVoluntario : req.body.nombre})
        res.json({opinion})
    }

}

module.exports = voluntarios;