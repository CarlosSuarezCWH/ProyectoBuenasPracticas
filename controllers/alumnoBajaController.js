const AlumnoBaja = require('../models/AlumnoBaja');

exports.getAllAlumnosBaja = async (req, res) => {
    try {
        const alumnosBaja = await AlumnoBaja.find();
        res.render('alumnos_baja', { alumnosBaja });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createAlumnoBaja = async (req, res) => {
    try {
        const newAlumnoBaja = new AlumnoBaja(req.body);
        await newAlumnoBaja.save();
        res.redirect('/alumnos_baja');
    } catch (err) {
        res.status(500).send(err);
    }
};
