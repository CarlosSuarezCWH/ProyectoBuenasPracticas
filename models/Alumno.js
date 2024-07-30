const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    apellidopa: String,
    apellidoma: String,
    promedio: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
