var models = require('../../models');
const PurchaseOrderRequestItemsValidation = require('./validator/purchaseorderrequestItemsValidation');

module.exports = {
    findAll(req, res){
        models.Purchase_Order_Resquest_Items.findAll({order: [['purchase_order_request_items_id', 'ASC']]})
        .then(function(purchase_order_request_items){
            res.status(200).json(purchase_order_request_items);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Purchase_Order_Resquest_Items.findById(req.params.id)
        .then(function(purchase_order_request_items){
            res.status(200).json(purchase_order_request_items);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate data here
        if(PurchaseOrderRequestItemsValidation.validateCreate(req, res)){
        var purchase_order_request_items = models.Purchase_Order_Resquest_Items.Build();
        purchase_order_request_items.purchase_order_id = req.body.purchase_order_id;
        purchase_order_request_items.item_id = req.body.item_id;
        purchase_order_request_items.color_id = req.body.color_id;
        purchase_order_request_items.garment_id = req.body.garment_id;
        purchase_order_request_items.size_id = req.body.size_id;
        purchase_order_request_items.quantity_requested = req.body.quantity_requested;
        purchase_order_request_items.description = req.body.description;
        purchase_order_request_items.status = req.body.status;
        purchase_order_request_items.process_id = req.body.process_id;
        purchase_order_request_items.flag = req.body.flag;
        purchase_order_request_items.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Purchase_Order_Resquest_Items.findById(req.params.id)
        .then(function(purchase_order_request_items){
            if(PurchaseOrderRequestItemsValidation.validateUpdate()){
        purchase_order_request_items.purchase_order_id = req.body.purchase_order_id;
        purchase_order_request_items.item_id = req.body.item_id;
        purchase_order_request_items.color_id = req.body.color_id;
        purchase_order_request_items.garment_id = req.body.garment_id;
        purchase_order_request_items.size_id = req.body.size_id;
        purchase_order_request_items.quantity_requested = req.body.quantity_requested;
        purchase_order_request_items.description = req.body.description;
        purchase_order_request_items.status = req.body.status;
        purchase_order_request_items.process_id = req.body.process_id;
        purchase_order_request_items.flag = req.body.flag;
        purchase_order_request_items.save()
        .then(function(purchase_order_request_items){
            res.status(200).json(purchase_order_request_items);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(PurchaseOrderRequestItemsValidation.validateDelete()){
        models.Purchase_Order_Resquest_Items.destroy({
            where: {
                purchase_order_request_items_id: req.params.id
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