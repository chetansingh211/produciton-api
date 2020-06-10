const express = require('express');
const router = express.Router();

//Import controllers which hold the crud methods for each model
const style_process = require('../../controllers/style/styleProcessController');

router.get('/', style_process.findAll);
router.get('/:id', style_process.findOne);
router.post('/',  style_process.create);
router.patch('/:id', style_process.update);
router.delete('/:id', style_process.delete);

module.exports = router;