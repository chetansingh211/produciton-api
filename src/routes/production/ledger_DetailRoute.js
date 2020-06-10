const express = require('express');
const router = express.Router();

//Import controller which hold CRUD methods for each models
const ledger_detail = require('../../controllers/production/ledger_DetailController');

router.get('/', ledger_detail.findAll);
router.get('/:id', ledger_detail.findOne);
router.post('/', ledger_detail.create);
router.patch('/:id', ledger_detail.update);
router.delete('/:id', ledger_detail.delete);

module.exports = router;
