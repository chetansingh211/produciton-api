const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const production_sequence = require('../../controllers/misc/productionSequenceController');

router.get('/', production_sequence.findAll);
router.get('/:id', production_sequence.findOne);
router.post('/', production_sequence.create);
router.patch('/:id', production_sequence.update);
router.delete('/:id', production_sequence.delete);

module.exports = router;