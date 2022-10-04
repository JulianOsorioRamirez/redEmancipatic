/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/
    
    
    /**
     * controlador de Solicitudes en las vistas donde es requerido estos datos en el front 
     * Requerimos el modelo creado para realizar estas busquedas y enviar los datos a el front donde 
     * los utilizamos para pintar los diferentes componentes.
    */
    
const Solicitudes = require("../models/solicModels");

/**
    * Solicitudes
    * @constructor
    * @return {json}
    */

const solicitudes = {

    getSolicitudes : async (req, res) => {

       var solic =  await Solicitudes.find() 
          
      
        res.json(solic)



    },
    /**
    * PostSolicitudes
    * @constructor
    * @return {json}
    */

    postSolicitudes : async (req, res) => {

        var postSolicit =  await Solicitudes.findOne({asunto: req.body.asunto}) 
           
       
        res.json({postSolicit});
 
 
 
     }
}

module.exports = solicitudes;