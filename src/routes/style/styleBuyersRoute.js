const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each model
const style_buyers = require('../../controllers/style/styleBuyersController');

router.get('/', style_buyers.findAll);
router.get('/:id', style_buyers.findOne);
router.post('/', style_buyers.create);
router.patch('/:id', style_buyers.update);
router.delete('/:id', style_buyers.delete);

module.exports = router;