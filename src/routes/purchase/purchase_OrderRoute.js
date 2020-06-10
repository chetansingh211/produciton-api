const express = require('express');
const router = express.Router();

//Import controllers which hold CRUD methods for each model
const purchase_order = require('../../controllers/purchase/purchase_OrderController');

router.get('/', purchase_order.findAll);
router.get('/:id', purchase_order.findOne);
router.post('/', purchase_order.create);
router.patch('/:id', purchase_order.update);
router.delete('/:id', purchase_order.delete);

module.exports = router;
