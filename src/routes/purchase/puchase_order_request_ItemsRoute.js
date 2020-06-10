const express = require('express');
const router = express.Router();

//Import controllers which hold CRUD method for each model
const purchase_order_request_items = require('../../controllers/purchase/purchase_order_request_ItemsController');

router.get('/', purchase_order_request_items.findAll);
router.get('/:id', purchase_order_request_items.findOne);
router.post('/', purchase_order_request_items.create);
router.patch('/:id', purchase_order_request_items.update);
router.delete('/:id', purchase_order_request_items.delete);

module.exports = router;
