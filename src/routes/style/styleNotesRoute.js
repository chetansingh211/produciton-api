const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each model
const style_notes = require('../../controllers/style/stylePartsController');

router.get('/', style_notes.findAll);
router.get('/:id', style_notes.findOne);
router.post('/', style_notes.create);
router.patch('/:id', style_notes.update);
router.delete('/:id', style_notes.delete);

module.exports = router;