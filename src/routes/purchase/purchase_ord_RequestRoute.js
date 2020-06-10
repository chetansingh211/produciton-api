const express = require('express');
const router = express.Router();

//Import controllers which hold CRUD methods for each model
const purchase_ord_request = require('../../controllers/purchase/purchase_ord_RequestController');

router.get('/', purchase_ord_request.findAll);
router.get('/:id', purchase_ord_request.findOne);
router.post('/', purchase_ord_request.create);
router.patch('/:id', purchase_ord_request.update);
router.delete('/:id', purchase_ord_request.delete);

module.exports = router;
