const express = require('express');
const router = express.Router();

//Import controller which hold CRUD method for each models
const goods_receipt = require('../../controllers/production/goods_ReceiptController');

router.get('/', goods_receipt.findAll);
router.get('/:id', goods_receipt.findOne);
router.post('/', goods_receipt.create);
router.patch('/:id', goods_receipt.update);
router.delete('/:id', goods_receipt.delete);

module.exports = router;
