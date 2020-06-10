const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const rejection_challans = require('../../controllers/misc/rejectionChallansController');

router.get('/', rejection_challans.findAll);
router.get('/:id', rejection_challans.findOne);
router.post('/', rejection_challans.create);
router.patch('/:id', rejection_challans.update);
router.delete('/:id', rejection_challans.delete);

module.exports = router;