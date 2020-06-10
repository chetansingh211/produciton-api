var models = require('../../models');
const PurchaseOrdDeliverySchedule = require('./validator/purchaseorddeliveryScheduleValidation');

module.exports = {
    findAll(req, res){
        models.Purchase_Ord_delivery_Schedule.findAll({order: [['schedule_id', 'ASC']]})
        .then(function(purchase_ord_delivery_schedule){
            res.status(200).json(purchase_ord_delivery_schedule);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Purchase_Ord_delivery_Schedule.findById(req.params.id)
        .then(function(purchase_ord_delivery_schedule){
            res.status(200).json(purchase_ord_delivery_schedule);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate data here
        if(PurchaseOrdDeliverySchedule.validateCreate(req, res)){
        var purchase_ord_delivery_schedule = models.Purchase_Ord_delivery_Schedule.Build();
        purchase_ord_delivery_schedule.item_id = req.body.item_id;
        purchase_ord_delivery_schedule.purchase_order_id = req.body.purchase_order_id;
        purchase_ord_delivery_schedule.vendor_id = req.body.vendor_id;
        purchase_ord_delivery_schedule.delivery_date = req.body.delivery_date;
        purchase_ord_delivery_schedule.shipment_mode = req.body.shipment_mode;
        purchase_ord_delivery_schedule.quantity = req.body.quantity;
        purchase_ord_delivery_schedule.address = req.body.address;
        purchase_ord_delivery_schedule.city = req.body.city;
        purchase_ord_delivery_schedule.state = req.body.state;
        purchase_ord_delivery_schedule.zip = req.body.zip;
        purchase_ord_delivery_schedule.start_dt = req.body.start_dt;
        purchase_ord_delivery_schedule.end_dt = req.body.end_dt;
        purchase_ord_delivery_schedule.comments = req.body.comments;
        purchase_ord_delivery_schedule.delivery_location = req.body.delivery_location;
        purchase_ord_delivery_schedule.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Purchase_Ord_delivery_Schedule.findById(req.params.id)
        .then(function(purchase_ord_delivery_schedule){
            if(PurchaseOrdDeliverySchedule.validateUpdate()){
        purchase_ord_delivery_schedule.item_id = req.body.item_id;
        purchase_ord_delivery_schedule.purchase_order_id = req.body.purchase_order_id;
        purchase_ord_delivery_schedule.vendor_id = req.body.vendor_id;
        purchase_ord_delivery_schedule.delivery_date = req.body.delivery_date;
        purchase_ord_delivery_schedule.shipment_mode = req.body.shipment_mode;
        purchase_ord_delivery_schedule.quantity = req.body.quantity;
        purchase_ord_delivery_schedule.address = req.body.address;
        purchase_ord_delivery_schedule.city = req.body.city;
        purchase_ord_delivery_schedule.state = req.body.state;
        purchase_ord_delivery_schedule.zip = req.body.zip;
        purchase_ord_delivery_schedule.start_dt = req.body.start_dt;
        purchase_ord_delivery_schedule.end_dt = req.body.end_dt;
        purchase_ord_delivery_schedule.comments = req.body.comments;
        purchase_ord_delivery_schedule.delivery_location = req.body.delivery_location;
        purchase_ord_delivery_schedule.save()
        .then(function(purchase_ord_delivery_schedule){
            res.status(200).json(purchase_ord_delivery_schedule);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(PurchaseOrdDeliverySchedule.validateDelete()){
        models.Purchase_Ord_delivery_Schedule.destroy({
            where: {
                schedule_id: req.params.id
            }
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
}
};