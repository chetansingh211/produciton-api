const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const style_color = require('../../controllers/style/styleColorController');

router.get('/', style_color.findAll);
router.get('/:id', style_color.findOne);
router.post('/', style_color.create);
router.patch('/:id', style_color.update);
router.delete('/:id', style_color.delete);

module.exports = router;