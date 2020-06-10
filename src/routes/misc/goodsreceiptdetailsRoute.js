const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const goods_receipt_details = require('../../controllers/misc/goodsReceiptDetailsController');

router.get('/', goods_receipt_details.findAll);
router.get('/:id', goods_receipt_details.findOne);
router.post('/', goods_receipt_details.create);
router.patch('/:id', goods_receipt_details.update);
router.delete('/:id', goods_receipt_details.delete);

module.exports = router;