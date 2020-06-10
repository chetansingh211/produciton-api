var models = require('../../models');
const PurchaseOrdItemSpecValidation = require('./validator/purchaseorditemSpecValidation');

module.exports = {
    findAll(req, res){
        models.Purchase_Ord_Item_Spec.findAll({order: [['specification_id', 'ASC']]})
        .then(function(purchase_ord_item_spec){
            res.status(200).json(purchase_ord_item_spec);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Purchase_Ord_Item_Spec.findById(req.params.id)
        .then(function(purchase_ord_item_spec){
            res.status(200).json(purchase_ord_item_spec);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate data here
        if(PurchaseOrdItemSpecValidation.validateCreate(req, res)){
        var purchase_ord_item_spec = models.Purchase_Ord_Item_Spec.Build();
        purchase_ord_item_spec.purchase_order_id = req.body.purchase_order_id;
        purchase_ord_item_spec.item_id = req.body.item_id;
        purchase_ord_item_spec.specified_value = req.body.specified_value;
        purchase_ord_item_spec.received_value = req.body.received_value;
        purchase_ord_item_spec.verified = req.body.verified;
        purchase_ord_item_spec.verified_by = req.body.verified_by;
        purchase_ord_item_spec.verification_dt = req.body.verification_dt;
        purchase_ord_item_spec.descripency = req.body.descripency;
        purchase_ord_item_spec.unit = req.body.unit;
        purchase_ord_item_spec.accepted_quantity = req.body.accepted_quantity;
        purchase_ord_item_spec.description = req.body.description;
        purchase_ord_item_spec.inspection_challan = req.body.inspection_challan;
        purchase_ord_item_spec.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Purchase_Ord_Item_Spec.findById(req.params.id)
        .then(function(purchase_ord_item_spec){
            if(PurchaseOrdItemSpecValidation.validateUpdate()){
        purchase_ord_item_spec.purchase_order_id = req.body.purchase_order_id;
        purchase_ord_item_spec.item_id = req.body.item_id;
        purchase_ord_item_spec.specified_value = req.body.specified_value;
        purchase_ord_item_spec.received_value = req.body.received_value;
        purchase_ord_item_spec.verified = req.body.verified;
        purchase_ord_item_spec.verified_by = req.body.verified_by;
        purchase_ord_item_spec.verification_dt = req.body.verification_dt;
        purchase_ord_item_spec.descripency = req.body.descripency;
        purchase_ord_item_spec.unit = req.body.unit;
        purchase_ord_item_spec.accepted_quantity = req.body.accepted_quantity;
        purchase_ord_item_spec.description = req.body.description;
        purchase_ord_item_spec.inspection_challan = req.body.inspection_challan;
        purchase_ord_item_spec.save()
        .then(function(purchase_ord_item_spec){
            res.status(200).json(purchase_ord_item_spec);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(PurchaseOrdItemSpecValidation.validateDelete()){
        models.Purchase_Ord_Item_Spec.destroy({
            where: {
                specification_id: req.params.id
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