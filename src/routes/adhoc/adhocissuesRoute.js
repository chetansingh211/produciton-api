const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const adhoc_issues = require('../../controllers/adhoc/adhocissuesController');

router.get('/', adhoc_issues.findAll);
router.get('/:id', adhoc_issues.findOne);
router.post('/', adhoc_issues.create);
router.patch('/:id', adhoc_issues.update);
router.delete('/:id', adhoc_issues.delete);

module.exports = router;
