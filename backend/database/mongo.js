/** 
* @author Julian Osorio
* @author Isaac Ortega
* @author Gustavo Carretero
*/

/**
 * Conexion con la BD de MongoDB utilizando Atlas como servidor en la nube, para su uso se a utilizado la
 * libreria de moongose para una utilizacion mas sencilla
 */
const mongoose = require("mongoose");
const bdm = 'mongodb+srv://julianO:121314@cluster0.ewj4b.mongodb.net/desafio';
mongoose.connect(bdm, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connection to Database already!");
    })
    .catch((err) => {
        console.error(err);
    });