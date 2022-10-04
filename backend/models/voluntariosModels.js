const mongoose = require("mongoose");
/**
 * Modelo de moongose para la busqueda de datos o CRUD de los voluntarios
 */

const objetoSchema={
    nombre: String,
    apellidos: String,
    nombreApellidos: String,
    Movil: Number,
    codigoPostal: String,
    pass: Number,
    perfil: String,
    serviciosDisponibles: Array,
    status: Number,
    fotoV: String,
    bio: String,
    fechaInscripcion: String,
    Estrellas:Number,
    nOpinion: Number


};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const Voluntarios = mongoose.model("voluntarios", userSchema);

module.exports = Voluntarios;
