const express = require('express');
const router = express.Router();

//Import controller which hold CRUD method for each models
const rejection_challans = require('../../controllers/production/rejection_ChallansController');

router.get('/', rejection_challans.findAll);
router.get('/:id', rejection_challans.findOne);
router.post('/', rejection_challans.create);
router.patch('/:id', rejection_challans.update);
router.delete('/:id', rejection_challans.delete);

module.exports = router;
