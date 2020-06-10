var models = require('../../models');
const LedgerDetailValidation = require('./validator/ledgerDetailValidation');

module.exports= {
    findAll(req, res){
        models.Ledger_Detail.findAll({order: [['ledger_detail_id', 'ASC']]})
        .then(function(ledger_detail){
            res.status(200).json(ledger_detail);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Ledger_Detail.findById(req.params.id)
        .then(function(ledger_detail){
            res.status(200).json(ledger_detail);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(LedgerDetailValidation.validateCreate()){
        var ledger_detail = models.Ledger_Detail.Build();
        ledger_detail.ledger_detail_id = req.body.ledger_detail_id;
        ledger_detail.process_order_id = req.body.process_order_id;
        ledger_detail.vendor_id = req.body.vendor_id;
        ledger_detail.item_id = req.body.item_id;
        ledger_detail.process_id = req.body.process_id;
        ledger_detail.challan_number = req.body.challan_number;
        ledger_detail.challan_type = req.body.challan_type;
        ledger_detail.challan_date = req.body.challan_date;
        ledger_detail.vendor_ref_no = req.body.vendor_ref_no;
        ledger_detail.qty_received = req.body.qty_received;
        ledger_detail.qty_issued = req.body.qty_issued;
        ledger_detail.rct_date = req.body.rct_date;
        ledger_detail.average_rate = req.body.average_rate;
        ledger_detail.stock_on_hand = req.body.stock_on_hand;
        ledger_detail.opening_stock = req.body.opening_stock;
        ledger_detail.save()
        .then(function(insatnce){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        })
    }
    },
    update(req, res){
        models.Ledger_Detail.findById(req.params.id)
        .then(function(ledger_detail){
            if(LedgerDetailValidation.validateUpdate()){
            ledger_detail.ledger_detail_id = req.body.ledger_detail_id;
            ledger_detail.process_order_id = req.body.process_order_id;
            ledger_detail.vendor_id = req.body.vendor_id;
            ledger_detail.item_id = req.body.item_id;
            ledger_detail.process_id = req.body.process_id;
            ledger_detail.challan_number = req.body.challan_number;
            ledger_detail.challan_type = req.body.challan_type;
            ledger_detail.challan_date = req.body.challan_date;
            ledger_detail.vendor_ref_no = req.body.vendor_ref_no;
            ledger_detail.qty_received = req.body.qty_received;
            ledger_detail.qty_issued = req.body.qty_issued;
            ledger_detail.rct_date = req.body.rct_date;
            ledger_detail.average_rate = req.body.average_rate;
            ledger_detail.stock_on_hand = req.body.stock_on_hand;
            ledger_detail.opening_stock = req.body.opening_stock;
            ledger_detail.save()
            .then(function(ledger_detail){
                res.status(200).json(ledger_detail);
            })
            .catch(function(error){
                res.status(500).json(error);
            });
            }
        });
    },
    delete(req, res){
        if(LedgerDetailValidation.validateDelete()){
        models.Ledger_Detail.destroy({
            where: {
                ledger_detail_id: req.params.id
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