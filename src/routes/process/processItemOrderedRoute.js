const express = require('express');
const router = express.Router();

const process_item_ordered = require('../../controllers/process/processItemOrderedController');

router.get('/', process_item_ordered.findAll);
router.get('/:id', process_item_ordered.findOne);
router.post('/', process_item_ordered.create);
router.patch('/:id', process_item_ordered.update);
router.delete('/:id', process_item_ordered.delete);

module.exports = router;