const express = require('express');
const router = express.Router();

const process_order = require('../../controllers/process/processOrderController');

router.get('/', process_order.findAll);
router.get('/:id', process_order.findOne);
router.post('/', process_order.create);
router.patch('/:id', process_order.update);
router.delete('/:id', process_order.delete);

module.exports = router;