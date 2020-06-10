const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const ledger_master = require('../../controllers/misc/ledgerMasterController');

router.get('/', ledger_master.findAll);
router.get('/:id', ledger_master.findOne);
router.post('/', ledger_master.create);
router.patch('/:id', ledger_master.update);
router.delete('/:id', ledger_master.delete);

module.exports = router;