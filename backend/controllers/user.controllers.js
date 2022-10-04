/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/

/**
 * Controlador de las diferentes funciones que implican la interaccion de el usuario
 * Empezamos requeriendo las dependencias que utilizaremos en este controlador:
 * 
 * Para el encriptamiento de la contraseña utilizamos la libreria Bcrypt y requerimos el modelo de usuario 
 * para los CRUD con la BD que en este caso es mongoDB
 */

const bcrypt = require("bcrypt");
const Usuarios = require('../models/userModels')

/**
    * User
    * @constructor
    * @return {json}
    * Guardamos en la constante User las distintas funciones que vamos a utilizar para la interaccion de el usuario
    * en el front que involucren datos de el backend
    */

const user = {

  /**
   * register
   * @contructor
   * @return {json}
   * Utilizamos regex para validar los diferentes campos de el registro de usuario, lo validamos con condicionales
   * y si todo es correcto hacemos un CRUD en la BD de Usuarios y damos una respuesta positiva a el FRONT
   */
  registrer: (req, res) => {
    

    const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const telfExp = new RegExp(/^\d{9}$/);
    const passExp = new RegExp(
      /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/
    );
    const postalCode = new RegExp(/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/)


    const name = req.body.name
    const unName = req.body.unName
    const pass = req.body.pass
    const number = req.body.number
    const cp = req.body.postalCode
    const passConf = req.body.passConf
    let fecha = new Date()
        var fecha1 = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();




    if (

      !nameExp.test(name) ||
      !unNameExp.test(unName) ||
      !passExp.test(pass) ||
      pass != passConf ||
      !telfExp.test(number) ||
      !postalCode.test(cp)
    ) {
  
      //res.send

    } else {
      /**
       * Encriptamos la contraseña para su posterior CRUD en la BD
       */
      
      bcrypt.hash(pass, 10, (err, palabraSecretaEncriptada) => {
        if (err) {

        } else {

          palabraEncriptada = palabraSecretaEncriptada;


        }
        let userJson2 = {
          Nombre: name,
          Apellidos: unName,
          'Nombre y Apellidos': `${name} ${unName}`,
          'Movil':number,
          CP: cp,
          pass: palabraEncriptada,
          'Foto miembro':'',
          'fecha de inscripcion':fecha1
          
        };
        let UsuarioRegistrado = new Usuarios(userJson2)
        UsuarioRegistrado.save(function (err, UsuarioRegistrado) {
res.json({usuario: UsuarioRegistrado})

        })
      });
      
    }
  },
  /**
   * login
   * @contructor
   * @return {json}
   * Hacemos una peticion de datos a el Front que se envian en un @const {JSON} y hacemos una busqueda en la BD 
   * para verificar que el usuario sea correcto
   */

  login: async (req, res) => {
    const telf = req.body.telf
    const pass = req.body.pass
   
    var login = await Usuarios.findOne({ Movil: telf })


    if (login == null) {
      res.json({ logeado: false })
    } else {
      /**
       * aqui comparamos la contraseña introducida por el usuario con la encriptada que viene de la BD
       * para verificar que es correcto si es asi realiamos una respuesta positiva con un @const {JSON} a el front
       */
      bcrypt.compare(pass, login.pass).then(function (result) {
        if (result === true) {
          res.json({ logeado: login.Nombre })

        } else {
          res.json({ logeado: false })
        }
      });

    }

  },
  prueba:async (req,res) => {
    const telf="1231233123"
    var login = await Usuarios.findOne({ Movil: telf })
    if(login){
return true
    }else{ return false}

  }
}

module.exports = user;