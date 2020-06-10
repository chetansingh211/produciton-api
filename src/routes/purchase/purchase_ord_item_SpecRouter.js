const express = require('express');
const router = express.Router();

//Import controllers which hold CRUD method for each model
const purchase_ord_item_spec = require('../../controllers/purchase/purchase_ord_item_SpecController');

router.get('/', purchase_ord_item_spec.findAll);
router.get('/:id', purchase_ord_item_spec.findOne);
router.post('/', purchase_ord_item_spec.create);
router.patch('/:id', purchase_ord_item_spec.update);
router.delete('/:id', purchase_ord_item_spec.delete);

module.exports = router;
