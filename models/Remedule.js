const mongoose = require('mongoose');

const RemeduleSchema = new mongoose.Schema({
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno' },
    materia: String,
    carrera: String,
    estatus: { type: String, enum: ['pagado', 'no pagado'] }
});

module.exports = mongoose.model('Remedule', RemeduleSchema);
