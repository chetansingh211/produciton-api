const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const style_parts = require('../../controllers/style/stylePartsController');

router.get('/', style_parts.findAll);
router.get('/:id', style_parts.findOne);
router.post('/', style_parts.create);
router.patch('/:id', style_parts.update);
router.delete('/:id', style_parts.delete);

module.exports = router;