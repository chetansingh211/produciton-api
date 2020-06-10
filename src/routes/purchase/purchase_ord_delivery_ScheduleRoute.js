const express = require('express');
const router = express.Router();

//Import controllers which hold CRUD method for each model
const purchase_ord_delivery_schedule = require('../../controllers/purchase/purchase_ord_delivery_ScheduleController');

router.get('/', purchase_ord_delivery_schedule.findAll);
router.get('/:id', purchase_ord_delivery_schedule.findOne);
router.post('/', purchase_ord_delivery_schedule.create);
router.patch('/:id', purchase_ord_delivery_schedule.update);
router.delete('/:id', purchase_ord_delivery_schedule.delete);

module.exports = router;
