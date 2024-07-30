const express = require('express');
const router = express.Router();
const alumnoBajaController = require('../controllers/alumnoBajaController');

router.get('/', alumnoBajaController.getAllAlumnosBaja);
router.post('/', alumnoBajaController.createAlumnoBaja);

module.exports = router;
