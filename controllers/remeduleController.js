const Remedule = require('../models/Remedule');
const Alumno = require('../models/Alumno');

exports.getAllRemedules = async (req, res) => {
    try {
        const remedules = await Remedule.find().populate('alumno');
        res.render('remedules', { remedules });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createRemedule = async (req, res) => {
    try {
        const newRemedule = new Remedule(req.body);
        await newRemedule.save();
        res.redirect('/remedules');
    } catch (err) {
        res.status(500).send(err);
    }
};
