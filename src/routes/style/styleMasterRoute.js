const express = require('express');
const router = express.Router();

//Import controller which hold the CRUD methods for each model
const style_master = require('../../controllers/style/styleMasterController');

router.get('/', style_master.findAll);
router.get('/:id', style_master.findOne);
router.post('/', style_master.create);
router.patch('/:id', style_master.update);
router.delete('/:id', style_master.delete);

module.exports = router;