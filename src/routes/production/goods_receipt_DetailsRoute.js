const express = require('express');
const router = express.Router();

//Import controller which hold CRUD method for each models
const goods_receipt_details = require('../../controllers/production/goods_receipt_DetailsController');

router.get('/', goods_receipt_details.findAll);
router.get('/:id', goods_receipt_details.findOne);
router.post('/', goods_receipt_details.create);
router.patch('/:id', goods_receipt_details.update);
router.delete('/:id', goods_receipt_details.delete);

module.exports = router;
