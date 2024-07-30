const express = require('express');
const router = express.Router();
const remeduleController = require('../controllers/remeduleController');

router.get('/', remeduleController.getAllRemedules);
router.post('/', remeduleController.createRemedule);

module.exports = router;
