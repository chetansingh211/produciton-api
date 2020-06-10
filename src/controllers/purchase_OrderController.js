var models = require('../../models');
const PurchaseOrderValidation = require('./purchase/validator/purchaseOrderValidation');

module.exports = {
    findAll(req, res){
        models.Purchase_Order.findAll({order: [['purchase_order_id', 'ASC']]})
        .then(function(purchase_order){
            res.status(200).json(purchase_order);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Purchase_Order.findById(req.params.id)
        .then(function(purchase_order){
            res.status(200).json(purchase_order);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate data here
        if(PurchaseOrderValidation.validateCreate(req,res)){
        var purchase_order = models.Purchase_Order.Build();
        purchase_order.purchase_order_number = req.body.purchase_order_number;
        purchase_order.order_type_id = req.body.order_type_id;
        purchase_order.order_date = req.body.order_date;
        purchase_order.order_catagory = req.body.order_catagory;
        purchase_order.vendor_id = req.body.vendor_id;
        purchase_order.order_issued_by = req.body.order_issued_by;
        purchase_order.buyer_order_id = req.body.buyer_order_id;
        purchase_order.advance_amount = req.body.advance_amount;
        purchase_order.order_value = req.body.order_value;
        purchase_order.unit_value = req.body.unit_value;
        purchase_order.bank_guarantee = req.body.bank_guarantee;
        purchase_order.retention_money = req.body.retention_money;
        purchase_order.tax_amount = req.body.tax_amount;
        purchase_order.freight = req.body.freight;
        purchase_order.insurance = req.body.insurance;
        purchase_order.excise_duty = req.body.excise_duty;
        purchase_order.customs_fees = req.body.customs_fees;
        purchase_order.airport_charges = req.body.airport_charges;
        purchase_order.clearance_charges = req.body.clearance_charges;
        purchase_order.miscellaneous_charges = req.body.miscellaneous_charges;
        purchase_order.discount = req.body.discount;
        purchase_order.fob_in_fcy = req.body.fob_in_fcy;
        purchase_order.fob_in_irs = req.body.fob_in_irs;
        purchase_order.currency = req.body.currency;
        purchase_order.exchange_rate = req.body.exchange_rate;
        purchase_order.status = req.body.status;
        purchase_order.po_issued_by = req.body.po_issued_by;
        purchase_order.po_authorised_by = req.body.po_authorised_by;
        purchase_order.despatch_mode = req.body.despatch_mode;
        purchase_order.cancel_date = req.body.cancel_date;
        purchase_order.payment_terms = req.body.payment_terms;
        purchase_order.comments = req.body.comments;
        purchase_order.po_terms = req.body.po_terms;
        purchase_order.start_delivery_date = req.body.start_delivery_date;
        purchase_order.end_delivery_date = req.body.end_delivery_date;
        purchase_order.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Purchase_Order.findById(req.params.id)
        .then(function(purchase_order){
            if(PurchaseOrderValidation.validateUpdate()){
        purchase_order.purchase_order_number = req.body.purchase_order_number;
        purchase_order.order_type_id = req.body.order_type_id;
        purchase_order.order_date = req.body.order_date;
        purchase_order.order_catagory = req.body.order_catagory;
        purchase_order.vendor_id = req.body.vendor_id;
        purchase_order.order_issued_by = req.body.order_issued_by;
        purchase_order.buyer_order_id = req.body.buyer_order_id;
        purchase_order.advance_amount = req.body.advance_amount;
        purchase_order.order_value = req.body.order_value;
        purchase_order.unit_value = req.body.unit_value;
        purchase_order.bank_guarantee = req.body.bank_guarantee;
        purchase_order.retention_money = req.body.retention_money;
        purchase_order.tax_amount = req.body.tax_amount;
        purchase_order.freight = req.body.freight;
        purchase_order.insurance = req.body.insurance;
        purchase_order.excise_duty = req.body.excise_duty;
        purchase_order.customs_fees = req.body.customs_fees;
        purchase_order.airport_charges = req.body.airport_charges;
        purchase_order.clearance_charges = req.body.clearance_charges;
        purchase_order.miscellaneous_charges = req.body.miscellaneous_charges;
        purchase_order.discount = req.body.discount;
        purchase_order.fob_in_fcy = req.body.fob_in_fcy;
        purchase_order.fob_in_irs = req.body.fob_in_irs;
        purchase_order.currency = req.body.currency;
        purchase_order.exchange_rate = req.body.exchange_rate;
        purchase_order.status = req.body.status;
        purchase_order.po_issued_by = req.body.po_issued_by;
        purchase_order.po_authorised_by = req.body.po_authorised_by;
        purchase_order.despatch_mode = req.body.despatch_mode;
        purchase_order.cancel_date = req.body.cancel_date;
        purchase_order.payment_terms = req.body.payment_terms;
        purchase_order.comments = req.body.comments;
        purchase_order.po_terms = req.body.po_terms;
        purchase_order.start_delivery_date = req.body.start_delivery_date;
        purchase_order.end_delivery_date = req.body.end_delivery_date;
        purchase_order.save()
        .then(function(purchase_order){
            res.status(200).json(purchase_order);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(PurchaseOrderValidation.validateDelete()){
        models.Purchase_Order.destroy({
            where: {
                purchase_order_id: req.params.id
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