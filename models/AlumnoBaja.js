const mongoose = require('mongoose');

const AlumnoBajaSchema = new mongoose.Schema({
    nombre: String,
    apellidopa: String,
    promedio: Number
});

module.exports = mongoose.model('AlumnoBaja', AlumnoBajaSchema);
