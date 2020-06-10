const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each models
const style_color_sizes  = require('../../controllers/style/styleColorSizesController');

router.get('/', style_color_sizes.findAll);
router.get('/:id', style_color_sizes.findOne);
router.post('/', style_color_sizes.create);
router.patch('/:id', style_color_sizes.update);
router.delete('/:id', style_color_sizes.delete);

module.exports = router;