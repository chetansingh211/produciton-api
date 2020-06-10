const express = require('express');
const router = express.Router();

//Import controllers which hold the CRUD methods for each model
const company = require('../../controllers/company/companyController');
const companyValidator = require('../../controllers/company/validator/companyValidation');

router.get('/', company.findAll);
router.get('/:id', companyValidator.validate('GET'), company.findOne);
router.post('/', companyValidator.validate('POST'), company.create);
router.patch('/:id',  companyValidator.validate('PATCH'), company.update);
router.delete('/:id', companyValidator.validate('DELETE'), company.delete);

module.exports = router;