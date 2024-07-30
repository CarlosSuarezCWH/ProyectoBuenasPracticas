const Alumno = require('../models/Alumno');

exports.getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.render('alumnos', { alumnos });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createAlumno = async (req, res) => {
    try {
        const newAlumno = new Alumno(req.body);
        await newAlumno.save();
        res.redirect('/alumnos');
    } catch (err) {
        res.status(500).send(err);
    }
};
