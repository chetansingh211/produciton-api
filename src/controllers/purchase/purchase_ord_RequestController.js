var models = require('../../models');
const PurchaseOrdRequestValidation = require('./validator/purchaseordRequestValidation');

module.exports = {
    findAll(req, res){
        models.Purchase_Ord_Request.findAll({order: [['purchase_ord_request_id', 'ASC']]})
        .then(function(purchase_ord_request){
            res.status(200).json(purchase_ord_request);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Purchase_Ord_Request.findById(req.params.id)
        .then(function(purchase_ord_request){
            res.status(200).json(purchase_ord_request);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate data here
        if(PurchaseOrdRequestValidation.validateCreate(req, res)){
        var purchase_ord_request = models.Purchase_Ord_Request.Build();
        purchase_ord_request.purchase_ord_id= req.body.purchase_ord_id;
        purchase_ord_request.item_id = req.body.item_id;
        purchase_ord_request.style_id = req.body.style_id;
        purchase_ord_request.color_id = req.body.color_id;
        purchase_ord_request.quantity = req.body.quantity;
        purchase_ord_request.unit_of_quantity = req.body.unit_of_quantity;
        purchase_ord_request.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Purchase_Ord_Request.findById(req.params.id)
        .then(function(purchase_ord_request){
            if(PurchaseOrdRequestValidation.validateUpdate()){
        purchase_ord_request = models.Purchase_Ord_Request.Build();
        purchase_ord_request.purchase_ord_id= req.body.purchase_ord_id;
        purchase_ord_request.item_id = req.body.item_id;
        purchase_ord_request.style_id = req.body.style_id;
        purchase_ord_request.color_id = req.body.color_id;
        purchase_ord_request.quantity = req.body.quantity;
        purchase_ord_request.unit_of_quantity = req.body.unit_of_quantity;
        purchase_ord_request.save()
        .then(function(purchase_ord_request){
            res.status(200).json(purchase_ord_request);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(PurchaseOrdRequestValidation.validateDelete()){
        models.Purchase_Ord_Request.destroy({
            where: {
                purchase_ord_request_id: req.params.id
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