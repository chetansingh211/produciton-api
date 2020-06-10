const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const rejection_notes = require('../../controllers/misc/rejectionNotesController');

router.get('/', rejection_notes.findAll);
router.get('/:id', rejection_notes.findOne);
router.post('/', rejection_notes.create);
router.patch('/:id', rejection_notes.update);
router.delete('/:id', rejection_notes.delete);

module.exports = router;