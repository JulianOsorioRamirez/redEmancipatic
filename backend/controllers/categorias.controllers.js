
/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/
    
    
    /**
     * controlador de categorias en las vistas donde es requerido estos datos en el front
     * Empezamos guardando en una constante el modelo que hemos creado para la busqueda en la BD
     * y hacemos dos busquedas rapidas en la base de dados de esas categorias para enviarlas a el front y poder 
     * pintarlas con react 
    */
    
    
const Categorias = require("../models/categModels");

/**
 * categorias
 * @constructor
 * @return {json}
 */
const categories = {

    getCategories : async (req, res) => {

       var categorias =  await Categorias.find() 
          
       
        res.json(categorias)



    },
    /**
    * categorias2
    * @constructor
    * @return {json}
    */

    postCategories2 : async (req, res) => {

        var categorias2 =  await Categorias.findOne({Categorias: req.body.Categorias}) 
           
       
        res.json({categorias2});
 
 
 
     }
}

module.exports = categories;