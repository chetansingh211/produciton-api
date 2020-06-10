var models = require('../../models');
const GoodsReceiptValidation = require('./validator/goodsReceiptValidation');

module.exports= {
    findAll(req, res){
        models.Goods_Receipt.findAll({order: [['goods_receipt_id', 'ASC']]})
        .then(function(goods_receipt){
            res.status(200).json(goods_receipt);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Goods_Receipt.findById(req.params.id)
        .then(function(goods_receipt){
            res.status(200).json(goods_receipt);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(GoodsReceiptValidation.validateCreate()){
        var goods_receipt = models.Goods_Receipt.Build();
        goods_receipt.location_id = req.body.location_id;
        goods_receipt.company_id = req.body.company_id;
        goods_receipt.vendor_id = req.body.vendor_id;
        goods_receipt.receipt_category = req.body.receipt_category;
        goods_receipt.challan_type = req.body.challan_type;
        goods_receipt.challan_number = req.body.challan_number;
        goods_receipt.challan_date = req.body.challan_date;
        goods_receipt.vendor_bill_number = req.body.vendor_bill_number;
        goods_receipt.vendor_bill_date = req.body.vendor_bill_date;
        goods_receipt.received_by = req.body.received_by;
        goods_receipt.received_at = req.body.received_at;
        goods_receipt.advance_amount = req.body.advance_amount;
        goods_receipt.bank_guarantee = req.body.bank_guarantee;
        goods_receipt.retention_money = req.body.retention_money;
        goods_receipt.goods_service_tax = req.body.goods_service_tax;
        goods_receipt.freight = req.body.freight;
        goods_receipt.insurance = req.body.insurance;
        goods_receipt.excise_duty = req.body.excise_duty;
        goods_receipt.customs = req.body.customs;
        goods_receipt.airport_charges = req.body.airport_charges;
        goods_receipt.clearance_charges = req.body.clearance_charges;
        goods_receipt.miscellaneous_charges = req.body.miscellaneous_charges;
        goods_receipt.discount = req.body.discount;
        goods_receipt.payment_terms = req.body.payment_terms;
        goods_receipt.remarks = req.body.remarks;
        goods_receipt.related_challan_number = req.body.related_challan_number;
        goods_receipt.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    },
    update(req, res){
        models.Goods_Receipt.findById(req.params.id)
        .then(function(goods_receipt){
            if(GoodsReceiptValidation.validateUpdate()){
            goods_receipt.location_id = req.body.location_id;
            goods_receipt.company_id = req.body.company_id;
            goods_receipt.vendor_id = req.body.vendor_id;
            goods_receipt.receipt_category = req.body.receipt_category;
            goods_receipt.challan_type = req.body.challan_type;
            goods_receipt.challan_number = req.body.challan_number;
            goods_receipt.challan_date = req.body.challan_date;
            goods_receipt.vendor_bill_number = req.body.vendor_bill_number;
            goods_receipt.vendor_bill_date = req.body.vendor_bill_date;
            goods_receipt.received_by = req.body.received_by;
            goods_receipt.received_at = req.body.received_at;
            goods_receipt.advance_amount = req.body.advance_amount;
            goods_receipt.bank_guarantee = req.body.bank_guarantee;
            goods_receipt.retention_money = req.body.retention_money;
            goods_receipt.goods_service_tax = req.body.goods_service_tax;
            goods_receipt.freight = req.body.freight;
            goods_receipt.insurance = req.body.insurance;
            goods_receipt.excise_duty = req.body.excise_duty;
            goods_receipt.customs = req.body.customs;
            goods_receipt.airport_charges = req.body.airport_charges;
            goods_receipt.clearance_charges = req.body.clearance_charges;
            goods_receipt.miscellaneous_charges = req.body.miscellaneous_charges;
            goods_receipt.discount = req.body.discount;
            goods_receipt.payment_terms = req.body.payment_terms;
            goods_receipt.remarks = req.body.remarks;
            goods_receipt.related_challan_number = req.body.related_challan_number;
            goods_receipt.save()
            .then(function(goods_receipt){
                res.status(200).json(goods_receipt);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
        }
        });
    },
    delete(req, res){
        if(GoodsReceiptValidation.validateDelete()){
        models.Goods_Receipt.destroy({
            where: {
                goods_receipt_id: req.params.id
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