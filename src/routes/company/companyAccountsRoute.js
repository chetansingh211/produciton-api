const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each model
const company_accounts = require('../../controllers/company/companyAccountsController');

router.get('/', company_accounts.findAll);
router.get('/:id',company_accounts.findOne);
router.post('/',company_accounts.create);
router.patch('/:id',company_accounts.update);
router.delete('/:id',company_accounts.delete);

module.exports = router;
