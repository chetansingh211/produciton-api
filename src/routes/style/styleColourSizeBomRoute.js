const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each model
const style_colour_size_bom = require('../../controllers/style/styleColourSizeBomController');

router.get('/', style_colour_size_bom.findAll);
router.get('/:id', style_colour_size_bom.findOne);
router.post('/', style_colour_size_bom.create);
router.patch('/:id', style_colour_size_bom.update);
router.delete('/:id', style_colour_size_bom.delete);

module.exports = router;