const express = require('express');
const router = express.Router();

const process_item_issued = require('../../controllers/process/processItemIssuedController');

router.get('/', process_item_issued.findAll);
router.get('/:id', process_item_issued.findOne);
router.post('/', process_item_issued.create);
router.patch('/:id', process_item_issued.update);
router.delete('/:id', process_item_issued.delete);

module.exports = router;