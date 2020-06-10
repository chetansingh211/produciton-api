var models = require('../../models');
const GoodsReceiptDetailsValidation = require('./validator/goodsReceiptDetailsValidation');

module.exports= {
    findAll(req, res){
        models.Goods_Receipt_Details.findAll({order: [['goods_receipt_details_id', 'ASC']]})
        .then(function(goods_receipt_details_id){
            res.status(200).json(goods_receipt_details);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Goods_Receipt_Details.findById(req.params.id)
        .then(function(goods_receipt_details){
            res.status(200).json(goods_receipt_details);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(GoodsReceiptDetailsValidation.validateCreate()){
        var goods_receipt_details = models.Goods_Receipt_Details.Build();
        goods_receipt_details.production_order_id = req.body.production_order_id;
        goods_receipt_details.challan_number = req.body.challan_number;
        goods_receipt_details.item_id = req.body.item_id;
        goods_receipt_details.received_qty = req.body.received_qty;
        goods_receipt_details.inspected_qty = req.body.inspected_qty;
        goods_receipt_details.passed_qty = req.body.passed_qty;
        goods_receipt_details.unit_qty = req.body.unit_qty;
        goods_receipt_details.rate_received = req.body.rate_received;
        goods_receipt_details.unit_rate = req.body.unit_rate;
        goods_receipt_details.rejected_qty = req.body.rejected_qty;
        goods_receipt_details.item_width = req.body.item_width;
        goods_receipt_details.lfold = req.body.lfold;
        goods_receipt_details.debit_note_no = req.body.debit_note_no;
        goods_receipt_details.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Goods_Receipt_Details.findById(req.params.id)
        .then(function(goods_receipt_details){
        if(GoodsReceiptDetailsValidation.validateUpdate()){
        goods_receipt_details.production_order_id = req.body.production_order_id;
        goods_receipt_details.challan_number = req.body.challan_number;
        goods_receipt_details.item_id = req.body.item_id;
        goods_receipt_details.received_qty = req.body.received_qty;
        goods_receipt_details.inspected_qty = req.body.inspected_qty;
        goods_receipt_details.passed_qty = req.body.passed_qty;
        goods_receipt_details.unit_qty = req.body.unit_qty;
        goods_receipt_details.rate_received = req.body.rate_received;
        goods_receipt_details.unit_rate = req.body.unit_rate;
        goods_receipt_details.rejected_qty = req.body.rejected_qty;
        goods_receipt_details.item_width = req.body.item_width;
        goods_receipt_details.lfold = req.body.lfold;
        goods_receipt_details.debit_note_no = req.body.debit_note_no;
        goods_receipt_details.save()
        .then(function(goods_receipt_details){
            res.status(200).json(goods_receipt_details);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if(GoodsReceiptDetailsValidation.validateDelete()){
        models.Goods_Receipt_Details.destroy({
            where: {
                goods_receipt_details_id: req.params.id
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