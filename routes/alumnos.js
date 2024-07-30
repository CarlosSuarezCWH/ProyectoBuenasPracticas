const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.getAllAlumnos);
router.post('/', alumnoController.createAlumno);

module.exports = router;
