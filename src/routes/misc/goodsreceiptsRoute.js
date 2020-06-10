const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const goods_receipts = require('../../controllers/misc/goodsReceiptsController');

router.get('/', goods_receipts.findAll);
router.get('/:id', goods_receipts.findOne);
router.post('/', goods_receipts.create);
router.patch('/:id', goods_receipts.update);
router.delete('/:id', goods_receipts.delete);

module.exports = router;