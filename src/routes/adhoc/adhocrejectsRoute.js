const express = require('express');
const router = express.Router();

const adhoc_rejects = require('../../controllers/adhoc/adhocrejectsController');

router.get('/', adhoc_rejects.findAll);
router.get('/:id', adhoc_rejects.findOne);
router.post('/', adhoc_rejects.create);
router.patch('/:id', adhoc_rejects.update);
router.delete('/:id', adhoc_rejects.delete);

module.exports = router;

